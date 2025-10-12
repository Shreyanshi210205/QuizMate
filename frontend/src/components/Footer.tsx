export default function Footer() {
  return (
    <footer className="py-12 bg-black text-gray-400 text-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">
            Quiz<span className="text-pink-500">zy</span>
          </h3>
          <p>The ultimate quiz platform for students and teachers.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">For Teachers</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-1">
            <li>contact@company.com</li>
            <li>(414) 687 - 5892</li>
            <li>794 Mcallister St, San Francisco</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-10">© 2025 StuQuiz. All rights reserved.</p>
    </footer>
  );
}
