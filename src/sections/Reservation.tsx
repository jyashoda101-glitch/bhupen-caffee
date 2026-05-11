import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', date: '', time: '', guests: '2' });
  };

  const inputClass =
    'w-full bg-cafe-dark/60 border border-cafe-gold/15 rounded-xl px-4 py-3.5 font-poppins text-sm text-cafe-cream placeholder:text-cafe-cream/30 focus:outline-none focus:border-cafe-gold/40 focus:ring-1 focus:ring-cafe-gold/20 transition-all duration-300';

  return (
    <section id="reservation" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cafe-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Reservations"
          title="Reserve Your Table"
          description="Secure your spot at Bhupen Caffee. Whether it's a cozy date or a team meeting, we'll have your table ready."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-cafe-gold/10 border border-cafe-gold/30 flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-cafe-gold" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-cafe-cream mb-2">
                  Reservation Confirmed!
                </h3>
                <p className="font-poppins text-sm text-cafe-cream/50">
                  We'll see you soon. A confirmation will be sent to your phone.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cafe-cream/30" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cafe-cream/30" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cafe-cream/30" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cafe-cream/30" />
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cafe-cream/30" />
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={`${inputClass} pl-11 appearance-none`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-cafe-dark text-cafe-cream">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  Reserve Now
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
