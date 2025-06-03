
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Clock, Award, Shield, BookOpen, MessageCircle } from "lucide-react";

const Index = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Sarah Martinez",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "I went from complete beginner to drawing portraits I'm actually proud of. Gleiverson's method is incredible!",
      rating: 5
    },
    {
      name: "David Chen",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "The step-by-step approach made it so easy to follow. I never thought I could draw realistic faces until now.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Best investment I've made in my artistic journey. The community support is amazing too!",
      rating: 5
    }
  ];

  const courseHighlights = [
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Learn at your own pace with unlimited access to all course materials"
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Training",
      description: "Progressive lessons that build your skills from basic shapes to photorealistic portraits"
    },
    {
      icon: MessageCircle,
      title: "Direct Instructor Support",
      description: "Get personalized feedback and guidance from Gleiverson himself"
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join a supportive community of fellow artists sharing their journey"
    },
    {
      icon: Award,
      title: "Certificate of Completion",
      description: "Earn a professional certificate to showcase your new skills"
    },
    {
      icon: Shield,
      title: "7-Day Money-Back Guarantee",
      description: "Risk-free learning with our satisfaction guarantee"
    }
  ];

  const modules = [
    {
      number: "01",
      title: "Foundation & Materials",
      topics: ["Essential drawing tools", "Paper selection", "Basic techniques", "Setting up your workspace"]
    },
    {
      number: "02", 
      title: "Facial Anatomy & Proportions",
      topics: ["Understanding facial structure", "Measuring techniques", "Common proportion mistakes", "Practice exercises"]
    },
    {
      number: "03",
      title: "Shading & Light",
      topics: ["Light source understanding", "Shadow mapping", "Blending techniques", "Creating depth"]
    },
    {
      number: "04",
      title: "Realistic Features",
      topics: ["Drawing eyes in detail", "Nose and mouth techniques", "Hair rendering", "Skin texture"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                ⭐ Join Over 10,000 Students
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Learn to Draw Stunning 
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Realistic Portraits
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed">
                Even if you've never drawn before. Transform your artistic skills from scratch with proven techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                  onClick={scrollToPrice}
                >
                  Start Learning Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Watch Preview
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop" 
                  alt="Portrait drawing demonstration"
                  className="rounded-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                  ✨ From Beginner to Pro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face" 
                alt="Professor Gleiverson Duarte"
                className="rounded-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white px-6 py-3 rounded-lg">
                <div className="text-sm font-medium">20+ Years</div>
                <div className="text-xs">Experience</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Meet Your Instructor
                <span className="block text-emerald-600">Gleiverson Duarte</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 20 years of experience in graphite portrait realism, Professor Gleiverson Duarte has mastered the art of teaching complex drawing techniques in simple, digestible steps.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His unique approach has helped thousands of students transform from complete beginners to confident portrait artists. Gleiverson believes that anyone can learn to draw with the right guidance and practice.
              </p>
              <div className="flex items-center gap-4 text-emerald-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">4.9/5 Average Student Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose This Course?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to master realistic portrait drawing, backed by proven teaching methods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseHighlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive curriculum designed to take you from beginner to advanced portrait artist.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {module.title}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-3 text-gray-700">
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real students who transformed their drawing skills.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">Verified Student</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Art?
            </h2>
            <p className="text-xl text-emerald-100 mb-12">
              Get lifetime access to everything you need to master realistic portrait drawing.
            </p>
            
            <Card className="bg-white text-gray-900 border-0 shadow-2xl max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Badge className="bg-red-500 text-white mb-4">Limited Time Offer</Badge>
                  <div className="space-y-2">
                    <div className="text-lg text-gray-600 line-through">$297</div>
                    <div className="text-5xl font-bold text-emerald-600">$97</div>
                    <div className="text-gray-600">One-time payment</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Complete 4-module course</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Lifetime access to all materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Direct instructor support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Exclusive community access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>7-day money-back guarantee</span>
                  </div>
                </div>
                
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 text-lg">
                  Enroll Now - Save $200
                </Button>
                
                <p className="text-sm text-gray-600 mt-4 text-center">
                  ⏰ Offer expires in 48 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              100% Risk-Free Guarantee
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We're so confident you'll love this course that we offer a 7-day money-back guarantee. 
              If you're not completely satisfied with your progress, we'll refund every penny.
            </p>
            <p className="text-lg text-gray-600">
              Your success is our priority. Start learning with complete confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Yes, I Want to Learn Realistic Drawing!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their artistic abilities. 
            Your journey to creating stunning portraits starts today.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-12 py-4 text-xl"
            onClick={scrollToPrice}
          >
            Start My Artistic Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                Realistic Portraits Course
              </h3>
              <p className="text-gray-400">
                Transform your drawing skills with expert guidance from Gleiverson Duarte.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact & Support</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 support@portraitcourse.com</p>
                <p>📱 Instagram: @gleiverson_art</p>
                <p>🎥 YouTube: Gleiverson Duarte</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <br />
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Realistic Portraits Course. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
