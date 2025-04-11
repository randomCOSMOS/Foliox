"use server"
import { getPayload } from "payload"
import config from '@payload-config'

export async function getPersonalInfo() {
    try {
        const payload = await getPayload({ config });
        const personalInfo = await payload.findGlobal({
        slug: "personal-info",
        depth: 2,
        });
        return personalInfo;
    } catch (error) {
        console.error("Error fetching personal info:", error);
        return null;
    }
}

export async function getProjects(limit?: number) {
    try {
        const payload = await getPayload({config});
        const projects = await payload.find({
            collection: "projects",
            depth: 2,
            limit: limit || 100
        });
        return projects.docs;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return null;
    }
}

export async function getAchievements(limit?: number) {
    try {
        const payload = await getPayload({ config });
        const achievements = await payload.find({
            collection: "achievements",
            depth: 2,
            limit: limit || 100,
        });
        return achievements.docs;
    } catch (error) {
        console.error("Error fetching achievements:", error);
        return null;
    }
}

export async function getBlogs(limit?: number) {
    try {
        const payload = await getPayload({ config });
        const blogs = await payload.find({
        collection: "blog-section",
        depth: 2,
        limit: limit || 100,
        });
        return blogs.docs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
}