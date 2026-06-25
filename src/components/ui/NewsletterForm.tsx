"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-md mx-auto sm:flex-row bg-white/40 backdrop-blur-xl p-4 sm:p-6 rounded-[24px] border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      onSubmit={(e) => {
        e.preventDefault();
        const email = (
          e.currentTarget.elements.namedItem("email") as HTMLInputElement
        )?.value;
        if (email) alert(`Thanks! We'll send deals to ${email}`);
      }}
    >
      <input
        id="newsletter-email"
        name="email"
        type="email"
        aria-label="Email address"
        autoComplete="email"
        placeholder="your@email.com"
        className="flex-1 w-full h-[52px] px-5 rounded-[14px] bg-white/80 border border-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm shadow-sm"
      />
      <button
        type="submit"
        className="w-full sm:w-auto h-[52px] px-8 rounded-[14px] bg-gradient-to-b from-[#4F46E5] to-[#2563EB] text-white font-bold text-sm shadow-[0_8px_20px_rgba(37,99,235,0.2)] hover:scale-[1.02] transition-transform whitespace-nowrap flex items-center justify-center"
      >
        Subscribe
      </button>
    </form>
  );
}
