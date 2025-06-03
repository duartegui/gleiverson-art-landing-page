
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Award, MessageCircle, Shield, Star, ArrowRight, Palette, BookOpen, Video, Download, Eye, Brush, PenTool, Heart, Brain, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Powerful + Minimal */}
      <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gray-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Learn to <span className="font-serif italic">Draw</span>
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
              and Rediscover the Joy of <span className="italic">Slowing Down</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Master realistic portrait drawing while embracing a calmer, more creative life through our proven V.E.R. method.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gray-800 hover:bg-gray-900 text-white px-12 py-6 text-lg rounded-none transition-all duration-300 transform hover:scale-105 font-light tracking-wide shadow-lg"
          >
            Join the Course Today
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-gray-500 mt-6 font-light">
            ✨ 7-day money-back guarantee • Lifetime access
          </p>
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-12"></div>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            <p>
              In our fast-paced world, drawing offers something precious: <strong className="font-medium">the gift of presence</strong>.
            </p>
            <p>
              When you pick up a pencil and focus on creating, your mind naturally calms. The endless chatter quiets. 
              You become fully absorbed in the gentle rhythm of shading, the careful observation of light and shadow.
            </p>
            <p>
              This isn't just about learning to draw—it's about <strong className="font-medium">reconnecting with yourself</strong> 
              through the meditative practice of art.
            </p>
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-none shadow-inner">
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-600 leading-relaxed">
              "Art is not what you see, but what you make others feel."
            </blockquote>
            <cite className="block mt-4 text-gray-500 font-light">— Edgar Degas</cite>
          </div>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-none shadow-2xl flex items-center justify-center mx-auto">
                <span className="text-gray-600 font-light">Professor Gleiverson</span>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Meet Your <span className="italic">Guide</span>
              </h3>
              <p>
                <strong className="font-medium">Hi, I'm Gleiverson Duarte.</strong> For over 20 years, I've been passionate about 
                realistic portrait drawing and helping people discover the therapeutic power of art.
              </p>
              <p>
                I believe that everyone can learn to draw—not just to create beautiful portraits, but to find 
                a peaceful escape from life's demands. Drawing teaches us patience, observation, and presence.
              </p>
              <p>
                Through my V.E.R. method, I help everyday people unlock their creative focus while embracing 
                a slower, more mindful approach to life. <strong className="font-medium">Art became my way back to peace</strong>, 
                and I'm here to share that journey with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Why This Course Will <span className="italic">Transform</span> You
          </h3>
          <p className="text-xl text-gray-600 font-light mb-16">Beyond drawing skills—discover a new way of being</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-gray-600" />,
                title: "No Experience Required",
                description: "Start from complete beginner and develop real skills at your own gentle pace."
              },
              {
                icon: <Brain className="w-8 h-8 text-gray-600" />,
                title: "Boost Mental Clarity",
                description: "Experience the meditative benefits of focused, creative practice."
              },
              {
                icon: <Clock className="w-8 h-8 text-gray-600" />,
                title: "Lifetime Access",
                description: "Learn and practice whenever you need a creative pause in life."
              },
              {
                icon: <Users className="w-8 h-8 text-gray-600" />,
                title: "Mindful Community",
                description: "Connect with like-minded people on a similar journey of creative growth."
              },
              {
                icon: <Zap className="w-8 h-8 text-gray-600" />,
                title: "Quick Daily Practice",
                description: "Just 20-30 minutes a day to develop skills and find your center."
              },
              {
                icon: <Award className="w-8 h-8 text-gray-600" />,
                title: "Proven Method",
                description: "The V.E.R. system has helped thousands rediscover joy through art."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Your <span className="italic">Journey</span> Through Art
          </h3>
          <p className="text-xl text-gray-600 font-light mb-16">10 carefully crafted modules to guide your transformation</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Foundations", description: "Beginning your artistic journey with mindful observation" },
              { title: "Light & Shadow", description: "Understanding depth through gentle shading techniques" },
              { title: "Facial Proportions", description: "The mathematics of beauty in human features" },
              { title: "Eyes & Expression", description: "Capturing the soul through careful detail" },
              { title: "Nose & Structure", description: "Building form with confident strokes" },
              { title: "Mouth & Emotion", description: "Expressing feeling through line and curve" },
              { title: "Hair & Texture", description: "Creating movement and life in your portraits" },
              { title: "Skin & Realism", description: "Achieving photorealistic results" },
              { title: "Profile Views", description: "Mastering different perspectives" },
              { title: "Complete Portraits", description: "Bringing everything together with confidence" }
            ].map((module, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white rounded-none group">
                <CardHeader className="pb-4">
                  <div className="w-8 h-8 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 mb-4 flex items-center justify-center rounded-full">
                    <span className="text-gray-600 font-light text-sm">{index + 1}</span>
                  </div>
                  <CardTitle className="text-gray-900 text-lg font-medium text-left">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-light text-left leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-16">
            Stories of <span className="italic">Transformation</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "This course didn't just teach me to draw—it taught me to see. Every session became my daily meditation.",
                location: "São Paulo"
              },
              {
                name: "João Santos", 
                text: "After years of stress, drawing became my refuge. The V.E.R. method is incredibly calming and effective.",
                location: "Rio de Janeiro"
              },
              {
                name: "Ana Costa",
                text: "I never thought I could create realistic portraits. Now I have a skill that brings me peace daily.",
                location: "Belo Horizonte"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-none">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-light">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <p className="text-gray-700 font-light italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="text-gray-600 font-light">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Invest in Your <span className="italic">Creativity</span> & Peace of Mind
          </h3>
          
          <div className="bg-white rounded-none p-12 shadow-2xl border border-gray-100">
            <div className="mb-8">
              <h4 className="text-2xl font-light text-gray-800 mb-4">Complete Drawing & Mindfulness Course</h4>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            </div>
            
            <ul className="text-left max-w-md mx-auto space-y-4 mb-12 text-gray-700 font-light">
              {[
                "Lifetime access to all 10 modules",
                "1 year of personal feedback from Gleiverson",
                "Exclusive mindful artist community",
                "6 bonus materials for creative growth",
                "Mobile-friendly lessons for learning anywhere"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <div className="text-5xl font-light text-gray-900 mb-2">R$ 497</div>
              <div className="text-gray-600 font-light">Or 12 monthly payments of R$ 54,47</div>
            </div>

            <Button 
              size="lg" 
              className="bg-gray-800 hover:bg-gray-900 text-white px-12 py-6 text-lg font-light rounded-none w-full mb-6 transition-all duration-300 transform hover:scale-105"
            >
              Yes, I'm Ready to Draw and Unwind
            </Button>
            
            <div className="flex items-center justify-center text-sm text-gray-500 font-light">
              <Shield className="w-4 h-4 mr-2" />
              Secure payment • SSL encrypted
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Guarantee */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-none shadow-lg border border-gray-200">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
              <div className="text-gray-700 font-light text-center">
                <div className="text-2xl font-medium">7</div>
                <div className="text-xs">DAYS</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Risk-Free <span className="italic">Promise</span>
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                Start your creative journey with complete confidence. If within 7 days you don't feel 
                this course is helping you develop both your drawing skills and a more mindful approach to life...
              </p>
              <p className="font-medium text-gray-900">
                Simply contact us for a full refund. No questions asked.
              </p>
              <p>
                We believe in the transformative power of art, and we want you to experience it risk-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Let Drawing Become Your <span className="italic">Daily Pause</span>
          </h3>
          
          <p className="text-xl text-gray-700 font-light mb-12 leading-relaxed">
            In a world that never stops, give yourself the gift of creative stillness. 
            Start your journey toward artistic skill and inner calm today.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gray-800 hover:bg-gray-900 text-white px-12 py-6 text-xl font-light rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Begin Your Artistic Journey
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          
          <p className="text-sm text-gray-500 mt-8 font-light">
            Join thousands who have discovered peace through art
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6"></div>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                YouTube
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 font-light">
            <p>© 2024 Gleiverson Duarte. All rights reserved.</p>
            <p className="mt-2">Teaching the art of drawing and the practice of presence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
