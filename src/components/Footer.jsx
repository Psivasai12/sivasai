
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 mt-24">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-green-400">DevOps Portfolio</h3>
        <p className="text-sm">Building reliable, scalable, and automated infrastructure solutions.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-green-400">About</a></li>
          <li><a href="#" className="hover:text-green-400">Projects</a></li>
          <li><a href="#" className="hover:text-green-400">Experience</a></li>
          <li><a href="#" className="hover:text-green-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-2">
          <li>Email: hello@devopsportfolio.com</li>
          <li>LinkedIn: /in/devops-engineer</li>
          <li>Location: Available Remotely</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-400">GitHub</a>
          <a href="#" className="hover:text-green-400">LinkedIn</a>
          <a href="#" className="hover:text-green-400">Twitter</a>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
      <p>&copy; 2024 DevOps Portfolio. Built with React, Tailwind CSS, and deployed via CI/CD.</p>
    </div>
  </footer>
);

export default Footer;
