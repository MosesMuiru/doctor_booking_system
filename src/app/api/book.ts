import { NextResponse } from "next/server";

export async function Get(){
    return NextResponse.json({
        "moses": 4040
    })
}