import { NextResponse } from "next/server";

export async function Get(req: any){
    console.log(req)
    return NextResponse.json({
        "moses": 4040
    })
}