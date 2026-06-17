import React, { useState } from "react";
import {
  Image,
  Linking,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
type Project = {
  title: string;
  tech: string;
  description: string;
};

const skills: string[] = [
  "React Native",
  "TypeScript",
  "Java",
  "PHP",
  "MySQL",
  "CodeIgniter 4",
  "Git",
];

const projects: Project[] = [
  {
    title: "Kitchen Display and Inventory System",
    tech: "Java Swing + MySQL",
    description:
      "Ordering and kitchen management system for burger shops.",
  },
  {
    title: "Student Management System",
    tech: "PHP + CodeIgniter 4",
    description:
      "Web-based student records and management platform.",
  },
  {
    title: "Portfolio Mobile App",
    tech: "React Native",
    description:
      "Modern mobile portfolio built using Expo and TypeScript.",
  },
];

export default function PortfolioScreen() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const colors: [string, string, string] = darkMode
    ? ["#0F172A", "#1E293B", "#334155"]
    : ["#F8FAFC", "#E2E8F0", "#CBD5E1"];

  const cardBackground = darkMode ? "rgba(15, 23, 42, 0.9)" : "#FFFFFF";
  const textPrimary = darkMode ? "#FFFFFF" : "#0F172A";
  const textSecondary = darkMode ? "#CBD5E1" : "#475569";
  const accentColor = darkMode ? "#60A5FA" : "#2563EB";
  const chipBackground = darkMode ? "#1E3A8A" : "#DBEAFE";
  const chipText = darkMode ? "#E0F2FE" : "#1E3A8A";

  const handleOpenURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <LinearGradient colors={colors} style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.topBar}>
            <View>
              <Text style={styles.screenTitle}>Lindon Arinton</Text>
            </View>

            <Pressable
              onPress={() => setDarkMode((prev) => !prev)}
              style={({ pressed }) => [styles.circleButton, pressed && styles.pressed]}
            >
              <Ionicons
                name={darkMode ? "sunny" : "moon"}
                size={22}
                color={darkMode ? "#FACC15" : "#0F172A"}
              />
            </Pressable>
          </View>

          <View style={[styles.heroCard, { backgroundColor: cardBackground }]}> 
            <View style={styles.avatarFrame}>
              <Image
                source={require("../../assets/images/avatar.png")}
                style={styles.avatar}
              />
            </View>

            <Text style={[styles.heroName, { color: textPrimary }]}>Lindon Arinton</Text>
            <Text style={[styles.heroRole, { color: textSecondary }]}>IT Student • Future Tambay with degree • Future lang</Text>
            <Text style={[styles.heroDescription, { color: textSecondary }]}>Building polished mobile experiences using Expo, React Native, and modern UI patterns.</Text>

            <View style={styles.badgeRow}>
              <View style={styles.badge}> 
                <Text style={styles.badgeText}>Open to new opportunities</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={[styles.statCard, { backgroundColor: cardBackground }]}> 
              <Text style={[styles.statNumber, { color: accentColor }]}>5+</Text>
              <Text style={[styles.statLabel, { color: textSecondary }]}>Projects</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: cardBackground }]}> 
              <Text style={[styles.statNumber, { color: accentColor }]}>3</Text>
              <Text style={[styles.statLabel, { color: textSecondary }]}>Years Coding</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: cardBackground }]}> 
              <Text style={[styles.statNumber, { color: accentColor }]}>7+</Text>
              <Text style={[styles.statLabel, { color: textSecondary }]}>Skills</Text>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: cardBackground }]}> 
            <Text style={[styles.sectionTitle, { color: accentColor }]}>About Me</Text>
            <Text style={[styles.bodyText, { color: textSecondary }]}>Passionate Information Technology student with experience in software development, databases, and mobile application development. I enjoy building practical systems that solve real-world problems.</Text>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: cardBackground }]}> 
            <Text style={[styles.sectionTitle, { color: accentColor }]}>Skills</Text>
            <View style={styles.skillsContainer}>
              {skills.map((skill) => (
                <View key={skill} style={[styles.skillBadge, { backgroundColor: chipBackground }]}> 
                  <Text style={[styles.skillText, { color: chipText }]}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: cardBackground }]}> 
            <Text style={[styles.sectionTitle, { color: accentColor }]}>Featured Projects</Text>
            {projects.map((project) => (
              <View key={project.title} style={[styles.projectCard, { backgroundColor: darkMode ? "rgba(255,255,255,0.06)" : "#F8FAFC" }]}> 
                <View style={[styles.projectAccent, { backgroundColor: accentColor }]} />
                <Text style={[styles.projectTitle, { color: textPrimary }]}>{project.title}</Text>
                <Text style={[styles.projectTech, { color: accentColor }]}>{project.tech}</Text>
                <Text style={[styles.bodyText, { color: textSecondary }]}>{project.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.socialRow}>
            <Pressable
              onPress={() => handleOpenURL("https://github.com/Lindon-Arinton")}
              style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}
            >
              <Ionicons name="logo-github" size={24} color="#fff" />
            </Pressable>
            <Pressable
              onPress={() => handleOpenURL("https://linkedin.com/in/lindon-arinton")}
              style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}
            >
              <Ionicons name="logo-linkedin" size={24} color="#fff" />
            </Pressable>
          </View>

          <Pressable
            onPress={() => setModalVisible(true)}
            style={({ pressed }) => [styles.contactButton, pressed && styles.pressed]}
          >
            <LinearGradient
              colors={darkMode ? ["#2563EB", "#3B82F6"] : ["#2563EB", "#60A5FA"]}
              style={styles.contactGradient}
            >
              <Text style={styles.contactText}>Contact Me</Text>
            </LinearGradient>
          </Pressable>

          <Modal visible={modalVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
              <View style={[styles.modalContent, { backgroundColor: cardBackground }]}> 
                <Text style={[styles.modalTitle, { color: textPrimary }]}>Contact Information</Text>
                <Text style={[styles.modalLabel, { color: textSecondary }]}>Email</Text>
                <Text style={[styles.modalValue, { color: textPrimary }]}>lindon@example.com</Text>
                <Text style={[styles.modalLabel, { color: textSecondary }]}>Facebook</Text>
                <Text style={[styles.modalValue, { color: textPrimary }]}>fb.com/lindon</Text>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}
                >
                  <Text style={styles.closeText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <View style={{ height: 32 }} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  topBar: {
    marginHorizontal: 20,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  screenTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },
  screenSubtitle: {
    color: "#94A3B8",
    marginTop: 4,
    fontSize: 13,
  },
  circleButton: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 4,
  },
  heroCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 8,
  },
  avatarFrame: {
    backgroundColor: "rgba(59,130,246,0.16)",
    padding: 6,
    borderRadius: 80,
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
  },
  heroName: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 18,
    textAlign: "center",
  },
  heroRole: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 22,
  },
  heroDescription: {
    marginTop: 12,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
  badgeRow: {
    marginTop: 18,
    flexDirection: "row",
  },
  badge: {
    backgroundColor: "rgba(96,165,250,0.18)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  badgeText: {
    color: "#BFDBFE",
    fontWeight: "800",
    fontSize: 13,
  },
  statsRow: {
    marginTop: 22,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
  },
  statLabel: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
  },
  sectionCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 24,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -6,
  },
  skillBadge: {
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    margin: 6,
  },
  skillText: {
    fontSize: 13,
    fontWeight: "700",
  },
  projectCard: {
    marginBottom: 14,
    borderRadius: 22,
    padding: 18,
    overflow: "hidden",
  },
  projectAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 72,
    height: 6,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
  },
  projectTech: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },
  socialRow: {
    marginTop: 18,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  contactButton: {
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 18,
    overflow: "hidden",
  },
  contactGradient: {
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 18,
  },
  contactText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.72)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContent: {
    width: "100%",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
  },
  modalLabel: {
    fontSize: 12,
    fontWeight: "700",
    marginTop: 14,
  },
  modalValue: {
    fontSize: 16,
    marginTop: 6,
  },
  closeButton: {
    marginTop: 24,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    alignItems: "center",
  },
  closeText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.8,
  },
});
