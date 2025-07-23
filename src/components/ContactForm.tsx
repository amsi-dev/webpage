import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Missatge enviat!",
      description: "Gràcies pel teu missatge. Et respondrem aviat.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-musical-gold-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-musical-gold/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-musical-warm">
                Envia'ns un missatge
              </CardTitle>
              <CardDescription className="text-musical-warm/70">
                Tens alguna pregunta sobre les nostres classes de música o la banda? Contacta amb nosaltres!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-musical-warm font-medium">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-musical-gold/30 focus:border-musical-gold focus:ring-musical-gold/20"
                    placeholder="El teu nom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-musical-warm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-musical-gold/30 focus:border-musical-gold focus:ring-musical-gold/20"
                    placeholder="el.teu.email@exemple.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-musical-warm font-medium">
                    Missatge
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-musical-gold/30 focus:border-musical-gold focus:ring-musical-gold/20 resize-none"
                    placeholder="Escriu el teu missatge ací..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-musical-gold hover:bg-musical-gold/90 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviant...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar missatge
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}