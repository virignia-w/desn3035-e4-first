import Link from "next/link";
import React from "react";

export default function Nav() {
    return <>

        <div className="col-3">
            <div className="list-group">
                <Link href="/" className="list-group-item list-group-item-action">
                    Home
                </Link>
                <link href="/about.html" className="list-group-item list-group-item-action">
                    About Us
                </link>
                <link href="/contact.html" className="list-group-item list-group-item-action">
                    Contact Us
                </link>
            </div>
            <p className="small text-danger text-center mt-3 text-warning">
                Coffee: the magic potion that turns morning mayhem into midday clarity.
            </p>
        </div>
    </>
}