"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Banknote, ShoppingCart, Phone, Building, LaptopMinimal, HeartPulse, Car,
  Camera, Briefcase, Rocket, Glasses, Scale, HandHeart, Building2, Dumbbell,
  Gamepad2, Shirt, Zap, Leaf, Truck
} from "lucide-react";
import { LiaVrCardboardSolid } from "react-icons/lia";
import { LuBrainCircuit } from "react-icons/lu";

const expertises = [
  // Finance & Banking removed per request
  { title: "E-commerce", icon: "ShoppingCart" },
  { title: "Telecom", icon: "Phone" },
  { title: "Real Estate", icon: "Building" },
  // Software removed per request
  { title: "Health & Fitness", icon: "HeartPulse" },
  { title: "Automotive", icon: "Car" },
  { title: "Photo & Video", icon: "Camera" },
  { title: "Business", icon: "Briefcase" },
  { title: "Startup", icon: "Rocket" },
  { title: "AR/VR", icon: "VrCardboard" },
  { title: "AI/ML", icon: "BrainCircuit" },
  { title: "Non-profit", icon: "HandHeart" },
  { title: "Govt. & Public Sector", icon: "Building2" },
  { title: "Sports & Fitness", icon: "Dumbbell" },
  { title: "Gaming", icon: "Gamepad2" },
  { title: "Fashion", icon: "Shirt" },
  { title: "Energy & Utilities", icon: "Zap" },
  { title: "Agriculture", icon: "Leaf" },
  { title: "Logistics", icon: "Truck" }
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7, once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            Our Reach
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Industry Expertise
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {expertises.map((expertise, index) => {
            const IconComponent = getIconComponent(expertise.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-xl">
                  {IconComponent && <IconComponent className="h-10 w-10 text-primary mb-3" />}
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{expertise.title}</h3>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getIconComponent(iconName: string) {
  switch (iconName) {
    case "Banknote": return Banknote;
    case "ShoppingCart": return ShoppingCart;
    case "Phone": return Phone;
    case "Building": return Building;
    case "LaptopMinimal": return LaptopMinimal;
    case "HeartPulse": return HeartPulse;
    case "Car": return Car;
    case "Camera": return Camera;
    case "Briefcase": return Briefcase;
    case "Rocket": return Rocket;
    case "Glasses": return Glasses;
    case "VrCardboard": return LiaVrCardboardSolid;
    case "Scale": return Scale;
    case "HandHeart": return HandHeart;
    case "Building2": return Building2;
    case "Dumbbell": return Dumbbell;
    case "Gamepad2": return Gamepad2;
    case "Shirt": return Shirt;
    case "Zap": return Zap;
    case "Leaf": return Leaf;
    case "Truck": return Truck;
    case "BrainCircuit": return LuBrainCircuit;
    default: return null;
  }
}