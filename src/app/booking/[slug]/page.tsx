'use client'
import React from "react";
import { usePathname } from "next/navigation";

function which_patient({params}:any): React.JSX.Element {

    console.log(params)
 

    const {slug} = params

 
    if(slug == "outsider") {
        return (
            <div>outsider</div>
        )
    }
    else if (slug == "student"){
        return(
            <div>
                student
            </div>
        )
    }
    else {
        return(
            <div>errror flani hapa</div>
        )
    }
   
}
export default which_patient