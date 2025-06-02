import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: 일정 목록 조회 (DB에서 가져옴)
export async function GET() {
  const routines = await prisma.routine.findMany();
  return NextResponse.json(routines);
}

// POST: 일정 추가 (DB에 저장)
export async function POST(request: Request) {
  const data = await request.json();
  const routine = await prisma.routine.create({
    data: {
      title: data.title,
      date: data.date,
    },
  });
  return NextResponse.json({ success: true, routine });
}
