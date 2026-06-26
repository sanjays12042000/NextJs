import { PrismaClient } from "@prisma/client";

const { NextResponse } = require("next/server");

const prisma = new PrismaClient();

export async function GET() {
  // 1. Data from frontend


  // 2. DB logic
  const db_data = await prisma.blog.findMany();

  // 3. data for db
  return NextResponse.json({ message: "fetched all blogs", data: db_data });
}

export async function POST(request) {
  // 1. Data from frontend
  const data = await request.json();

  // 2. DB logic
  const db_data = await prisma.blog.create({
    data: {
      blog_cover_url: data.blog_cover_url,
      blog_title: data.blog_title,
      blog_description: data.blog_description,
      blog_tags: data.blog_tags,
      blog_author_name: data.blog_author_name,
      blog_content: data.blog_content,
    },
  });
  // 3. Return the created blog
  return NextResponse.json({
    message: "Blog created successfully",
    data: db_data,
  });
}

export async function PUT(request) {
  // 1. Data from frontend

  const data = await request.json();

  // 2. DB logic
  const db_data = await prisma.blog.update({
    where: {
      blog_id: data.blog_id,
    },
    data: {
      blog_cover_url: data.blog_cover_url,
      blog_title: data.blog_title,
      blog_description: data.blog_description,
      blog_tags: data.blog_tags,
      blog_author_name: data.blog_author_name,
      blog_content: data.blog_content,
    },
  });
  // 3. data for db
  return NextResponse.json({ message: "updated the blog", data: db_data });
}

export async function DELETE(request) {
  // 1. Data from frontend
  const data = await request.json();

  // 2. DB logic
  await prisma.blog.delete({
    where: {
      blog_id: data.blog_id,
    },
  })

  // 3. data for db
  return NextResponse.json({ message: "deleted the blog" }); 


}