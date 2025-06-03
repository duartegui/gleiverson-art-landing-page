
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Clock, Award, MessageCircle, Shield, Star, ArrowRight, Palette, BookOpen, Video, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Dynamic Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 mb-4">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Realistic Portraits with Gleiverson Duarte
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn to Draw Stunning Realistic Portraits – Even If You've Never Drawn Before
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join over 10,000 students transforming their artistic skills from scratch.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            Start Learning Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
              <span className="text-6xl text-white font-bold">GD</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Instructor</h3>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">Professor Gleiverson Duarte</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 20 years of experience in graphite portrait realism, Professor Gleiverson has taught thousands of students worldwide. His patient teaching style and proven methodology have helped complete beginners create stunning, professional-quality portraits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Course?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Lifetime Access", description: "Learn at your own pace with unlimited access to all materials" },
              { icon: BookOpen, title: "Step-by-Step Training", description: "Follow our proven methodology from basic shapes to photorealistic portraits" },
              { icon: MessageCircle, title: "Direct Support", description: "Get personal feedback and guidance from Professor Gleiverson" },
              { icon: Users, title: "Exclusive Community", description: "Join a supportive community of fellow artists and share your progress" },
              { icon: Award, title: "Certificate of Completion", description: "Receive an official certificate to showcase your new skills" },
              { icon: Download, title: "Bonus Materials", description: "Access exclusive reference photos and drawing templates" }
            ].map((highlight, index) => (
              <Card key={index} className="text-center p-6 border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-400">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Course Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { module: "Module 1", title: "Drawing Fundamentals", topics: ["Basic shapes", "Proportions", "Shading techniques"] },
              { module: "Module 2", title: "Facial Features", topics: ["Eyes", "Nose", "Mouth", "Ears"] },
              { module: "Module 3", title: "Hair & Textures", topics: ["Different hair types", "Skin textures", "Fabric rendering"] },
              { module: "Module 4", title: "Complete Portrait", topics: ["Composition", "Final touches", "Professional presentation"] }
            ].map((module, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <Badge variant="outline" className="w-fit border-gray-400 text-gray-700">{module.module}</Badge>
                  <CardTitle className="text-gray-900">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Students Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "I went from stick figures to realistic portraits in just 3 months! Gleiverson's teaching method is incredible.", rating: 5 },
              { name: "Mike Chen", text: "The step-by-step approach made everything so clear. I finally understand how to capture likeness!", rating: 5 },
              { name: "Anna Rodriguez", text: "Best investment I've made in my artistic journey. The community support is amazing too!", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gray-500 text-gray-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price and Offer */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Limited Time Offer</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-lg text-gray-300 mb-4">Complete Course Package</div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl text-gray-400 line-through">$297</span>
              <span className="text-5xl font-bold text-white">$147</span>
            </div>
            <Badge variant="outline" className="border-gray-400 text-gray-200 mb-6">Save 50% - Ends December 31st</Badge>
            <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
              {[
                "Complete video course (20+ hours)",
                "Lifetime access to all materials",
                "Direct instructor support",
                "Exclusive community access",
                "Bonus reference materials",
                "Certificate of completion"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            Enroll Now - Limited Time!
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">7-Day Money-Back Guarantee</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're so confident you'll love this course that we offer a full refund if you're not completely satisfied within 7 days. No questions asked.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Drawing Skills?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who have already mastered realistic portrait drawing
          </p>
          <Button size="lg" className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            Yes, I Want to Learn Realistic Drawing!
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
              <p>support@portraitcourse.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="space-y-2">
                <p>Instagram: @gleiversonduarte</p>
                <p>YouTube: Gleiverson Art</p>
                <p>Facebook: Portrait Mastery</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Legal</h4>
              <div className="space-y-2">
                <p><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></p>
                <p><a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a></p>
                <p><a href="#" className="hover:text-gray-400 transition-colors">Refund Policy</a></p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Realistic Portraits with Gleiverson Duarte. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
