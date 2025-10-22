import React from 'react'

export default function StudentLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-[linear-gradient(180deg,#050506_0%,#09090a_30%,#0f0f10_100%)] text-white">
			{children}
		</div>
	)
}
