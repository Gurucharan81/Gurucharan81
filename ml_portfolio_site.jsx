import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div
      className="bg-gray-900 text-gray-100 font-sans"
      style={{
        backgroundImage: "url('/images/ml-background.png')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur sticky top-0 z-50">
        <div className="font-bold text-xl text-pink-400">Guru Charan</div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#projects" className="hover:text-pink-400">Projects</a>
          <a href="#skills" className="hover:text-pink-400">Skills</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </div>
        <a href="/MATAM_GURU_CHARAN_Resume.pdf" target="_blank" className="border px-3 py-1 rounded hover:bg-pink-500 hover:text-white">Resume</a>
      </nav>

      {/* Hero */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center space-y-4 p-6 bg-black/60">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold text-white">Matam Guru Charan</motion.h1>
        <p className="text-xl max-w-xl text-gray-300">Machine Learning Engineer | GenAI, NLP, GNNs & AI-driven solutions</p>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/Gurucharan81" target="_blank"><Github /></a>
          <a href="https://www.linkedin.com/in/guru-charan-matam-4b80b72a6" target="_blank"><Linkedin /></a>
          <a href="mailto:gurucharan2k4@gmail.com"><Mail /></a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto p-6 space-y-4 text-center bg-black/70 rounded-lg mt-6">
        <h2 className="text-3xl font-semibold text-pink-400">About Me</h2>
        <p className="text-gray-300">ML engineer from Hyderabad skilled in Python, TensorFlow, PyTorch, NLP, and data analytics. Built real-world AI projects like fuzzy name matching (~97% accuracy) & drug-drug interaction prediction (AUC‑ROC ~0.91). Currently exploring fine-tuning LLMs, prompt engineering, and RAG systems.</p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 p-6 mt-6">
        <div className="bg-black/70 p-4 rounded-lg shadow space-y-3">
          <h3 className="text-xl font-bold text-pink-400">Fuzzy Name Matching Algorithm</h3>
          <p className="text-gray-300">Phonetic algorithms & Random Forest; achieved ~97% accuracy for multilingual name deduplication.</p>
          <a className="text-pink-300 text-sm" href="https://github.com/Gurucharan81/fuzzynamematching-using-random-forest" target="_blank">View on GitHub →</a>
        </div>
        <div className="bg-black/70 p-4 rounded-lg shadow space-y-3">
          <h3 className="text-xl font-bold text-pink-400">Drug-Drug Interaction Prediction</h3>
          <p className="text-gray-300">Built with GNN & OCR; predicts side effects with AUC‑ROC ~0.91, F1 ~0.83.</p>
          <a className="text-pink-300 text-sm" href="https://github.com/Gurucharan81/drug-drug-interaction-prediction-using-gnn-and-ocr" target="_blank">View on GitHub →</a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto p-6 text-center space-y-4 bg-black/70 rounded-lg mt-6">
        <h2 className="text-3xl font-semibold text-pink-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-3 rounded shadow">Python</div>
          <div className="bg-gray-800 p-3 rounded shadow">TensorFlow</div>
          <div className="bg-gray-800 p-3 rounded shadow">PyTorch</div>
          <div className="bg-gray-800 p-3 rounded shadow">Hugging Face</div>
          <div className="bg-gray-800 p-3 rounded shadow">LangChain</div>
          <div className="bg-gray-800 p-3 rounded shadow">scikit-learn</div>
          <div className="bg-gray-800 p-3 rounded shadow">Pandas</div>
          <div className="bg-gray-800 p-3 rounded shadow">NumPy</div>
          <div className="bg-gray-800 p-3 rounded shadow">Gradio</div>
          <div className="bg-gray-800 p-3 rounded shadow">OpenAI & Gemini APIs</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center p-6 space-y-2 bg-black/70 rounded-lg mt-6 mb-6">
        <h2 className="text-3xl font-semibold text-pink-400">Contact</h2>
        <p>Email: <a className="text-pink-300" href="mailto:gurucharan2k4@gmail.com">gurucharan2k4@gmail.com</a></p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Gurucharan81" target="_blank"><Github /></a>
          <a href="https://www.linkedin.com/in/guru-charan-matam-4b80b72a6" target="_blank"><Linkedin /></a>
        </div>
      </section>

    </div>
  );
}
