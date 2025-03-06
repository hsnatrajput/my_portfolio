import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});
const Project = mongoose.model("projects", projectSchema);

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  icon: String,
});
const Service = mongoose.model("services", serviceSchema);

const homeContentSchema = new mongoose.Schema({
  title: String,
  name: String,
  description: String,
  profilePic: String,
  experience: Number,
  projectsCompleted: Number,
  satisfactionRate: Number,
});

const HomeContent = mongoose.model("home_contents", homeContentSchema);

const projectStorage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});
const uploadProjectImage = multer({ storage: projectStorage });

const serviceStorage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, "service-" + Date.now() + path.extname(file.originalname));
  },
});
const uploadServiceIcon = multer({ storage: serviceStorage });

app.post("/upload", uploadProjectImage.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

app.post("/projects", async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newProject = new Project({ title, description, image });
    await newProject.save();
    res.status(201).json({ success: true, message: "Project added successfully!", project: newProject });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Failed to add project" });
  }
});

app.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

app.post("/services", uploadServiceIcon.single("icon"), async (req, res) => {
  console.log("POST request received at /services");
  console.log(req.body);
  console.log(req.file);
  console.log("File:", req.file); 

  try {
    const { name, description } = req.body;
    if (!name || !description || !req.file) {
      return res.status(400).json({ error: "All fields including an icon are required" });
    }
    const newService = new Service({
      name,
      description,
      icon: `/uploads/${req.file.filename}`,
    });
    await newService.save();
    res.status(201).json({
      success: true,
      message: "Service added successfully!",
      service: newService,
    });
  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({ error: "Failed to add service" });
  }
});

app.get("/home-content", async (req, res) => {
  try {
    const homeData = await HomeContent.findOne(); 
    if (!homeData) return res.status(404).json({ error: "Home content not found" });
    res.status(200).json(homeData);
  } catch (error) {
    console.error("Error fetching home content:", error);
    res.status(500).json({ error: "Failed to fetch home content" });
  }
});

app.post("/home-content", async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    const { title, name, description, profilePic, experience, projectsCompleted, satisfactionRate } = req.body;

    let homeData = await HomeContent.findOne(); 
    if (!homeData) {
      homeData = new HomeContent({ title, name, description, profilePic, experience, projectsCompleted, satisfactionRate });
    } else {
      homeData.title = title;
      homeData.name = name;
      homeData.description = description;
      homeData.profilePic = profilePic;
      homeData.experience = experience;
      homeData.projectsCompleted = projectsCompleted;
      homeData.satisfactionRate = satisfactionRate;
    }
    await homeData.save();
    console.log("Saved Data:", homeData);
    res.status(200).json({ success: true, message: "Home content updated!", homeContent: homeData });
  } catch (error) {
    console.error("Error updating home content:", error);
    res.status(500).json({ error: "Failed to update home content" });
  }
});

app.post("/send-email", async (req, res) => {
  const { name, email, service, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "hasnatnaveed00@gmail.com",
    subject: `New Contact Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
