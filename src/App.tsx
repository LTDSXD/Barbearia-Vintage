import React from 'react';
import { MapPin, Clock, Phone, Instagram, Star, ChevronRight, Users, Award, Sparkles } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank'); // Replace with actual phone number
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-6xl font-bold mb-6">Barbearia Vintage</h1>
            <p className="text-2xl mb-8 font-light">Estilo e tradição desde 2010</p>
            <div className="flex gap-4 justify-center mb-12">
              <div className="px-6 py-3 border border-white/30 rounded-lg backdrop-blur-sm">
                <Users className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm">+5000 Clientes</p>
              </div>
              <div className="px-6 py-3 border border-white/30 rounded-lg backdrop-blur-sm">
                <Award className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm">Premiada</p>
              </div>
              <div className="px-6 py-3 border border-white/30 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm">Alta Qualidade</p>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              Agendar Horário
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Galeria de Cortes</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">Conheça alguns dos nossos trabalhos mais recentes e deixe-se inspirar para sua próxima transformação</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80',
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square shadow-lg">
                <img
                  src={image}
                  alt={`Corte ${index + 1}`}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver mais
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Horário */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2 text-zinc-600">
                <p className="flex justify-between">
                  <span>Segunda à Sexta</span>
                  <span className="font-medium">09:00 - 20:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-medium">Fechado</span>
                </p>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Localização</h3>
              <div className="space-y-2 text-zinc-600">
                <p>Rua Example, 123</p>
                <p>Bairro Centro</p>
                <p>São Paulo - SP</p>
                <p className="mt-4 font-medium">CEP: 01234-567</p>
              </div>
            </div>

            {/* Avaliações */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Avaliações</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-600">4.9/5 baseado em</p>
              <p className="font-semibold text-2xl text-green-600">200+ avaliações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Barbearia Vintage</h4>
              <p className="text-zinc-400">Transformando seu estilo desde 2010 com excelência e dedicação.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <p className="text-zinc-400">Tel: (11) 99999-9999</p>
              <p className="text-zinc-400">Email: contato@barbeariavintage.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-green-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <button onClick={handleWhatsAppClick} className="hover:text-green-500 transition-colors">
                  <Phone size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center md:text-left md:flex md:justify-between items-center">
            <p className="text-zinc-400">© 2024 Barbearia Vintage. Todos os direitos reservados.</p>
            <p className="text-zinc-400 mt-4 md:mt-0">Desenvolvido com ♥ em São Paulo</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 z-50"
      >
        <Phone size={24} />
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default App;