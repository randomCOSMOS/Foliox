"use client"

import React from "react"

export default function LogoutButton() {
    return <button onClick={() => window.location.href = window.location.origin + '/login'}>Log Out</button>
  }