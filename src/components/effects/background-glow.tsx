function BackgroundGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-80 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-600/20 to-indigo-600/5 blur-3xl"
      />
      <div
        className="absolute -bottom-80 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 to-blue-600/5 blur-3xl"
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-violet-500/10 to-transparent blur-3xl"
      />
    </div>
  )
}

export { BackgroundGlow }
