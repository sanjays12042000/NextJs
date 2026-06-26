import { PrismaClient } from "@prisma/client";

const { NextResponse } = require("next/server");

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    // 1. Data from frontend
    const data = await params;

    // 2. DB logic
    const db_data = await prisma.blog.findUnique({
        where:{
            blog_id: data.blogs_id
        }
    })
    // 3. data for db
    return NextResponse.json({ message: "fetched the blog", data: db_data });
}
