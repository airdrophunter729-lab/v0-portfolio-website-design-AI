import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, Zap, Users, Globe, BookOpen, Star } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AI Visual Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Portfolio
              </a>
              <a href="/blog" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Blog
              </a>
              <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Contact
              </a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-card to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  AI-Powered Visual Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Transform Your Products with
                  <span className="text-primary"> AI Photography</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
                  Professional product lifestyle shots, high-converting ad creatives, and custom AI tools. Get
                  magazine-quality visuals in 24 hours without expensive photo shoots.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  See Pricing
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-foreground/60">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>5.0 Rating on Upwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>24hr Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%2011_57AM-Mg8qglcL3rjpadh6JI6Sfdp2NXIZ3W.png"
                    alt="AI-generated product lifestyle shot"
                    width={300}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%2011_57AM%20%283%29-ufL8VyIzYeTsCeQFVVyCoph4UdAh3n.png"
                    alt="Professional product photography"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%2011_57AM%20%281%29-pNZhx4gRqQoIPGwqnvsLj6z1yCc0CJ.png"
                    alt="Lifestyle product shot"
                    width={300}
                    height={350}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%201_51PM%20%281%29-lOyD3YW9TeDsouORRyBU4osRzyXsXB.png"
                    alt="Smart product advertising"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">AI-Powered Visual Services</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
              From product photography to ad creatives, I deliver professional results using cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Product Lifestyle Shots</CardTitle>
                <CardDescription className="text-card-foreground/70">
                  10 professional lifestyle images in 24 hours using advanced AI technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• Multiple background contexts</li>
                  <li>• High-resolution files</li>
                  <li>• Commercial usage rights</li>
                  <li>• 24-hour delivery</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-card-foreground">$125</span>
                  <span className="text-card-foreground/70"> - $375</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Ad Creative Variations</CardTitle>
                <CardDescription className="text-card-foreground/70">
                  20+ high-converting ad creatives optimized for split testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• Multiple contexts & angles</li>
                  <li>• Platform optimization</li>
                  <li>• Performance predictions</li>
                  <li>• A/B testing ready</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-card-foreground">$495</span>
                  <span className="text-card-foreground/70"> - $1,295</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">AI Training & Consulting</CardTitle>
                <CardDescription className="text-card-foreground/70">
                  Team training and custom AI workflow implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• Live team training sessions</li>
                  <li>• Custom workflow documentation</li>
                  <li>• 50+ tested prompts</li>
                  <li>• Ongoing support</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-card-foreground">$495</span>
                  <span className="text-card-foreground/70"> - $1,995</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Global Market Adaptation</CardTitle>
                <CardDescription className="text-card-foreground/70">
                  Culturally adapted creatives for 8+ international markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• 8 major global markets</li>
                  <li>• Cultural authenticity</li>
                  <li>• Local language integration</li>
                  <li>• Market psychology notes</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-card-foreground">$1,295</span>
                  <span className="text-card-foreground/70"> - $3,495</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Custom AI Tools</CardTitle>
                <CardDescription className="text-card-foreground/70">
                  Industry-specific AI applications and automation tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• Custom web applications</li>
                  <li>• API integrations</li>
                  <li>• Mobile-responsive design</li>
                  <li>• 6 months support</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-card-foreground">$2,495</span>
                  <span className="text-card-foreground/70"> - $8,995</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Digital Products</CardTitle>
                <CardDescription className="text-card-foreground/70">
                  Prompt libraries and workflow guides for your industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• 100+ tested prompts</li>
                  <li>• Step-by-step workflows</li>
                  <li>• Video tutorials</li>
                  <li>• Monthly updates</li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-card-foreground">$47</span>
                  <span className="text-card-foreground/70"> - $197</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Recent Work</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
              See how AI-powered visuals transform ordinary products into compelling marketing assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%201_51PM-VjModeBB5k9pDFakyHz78nCTZkx86A.png"
                alt="Smart water bottle ad creatives"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
              <div>
                <h3 className="font-semibold text-foreground">Smart Water Bottle Campaign</h3>
                <p className="text-sm text-foreground/70">6 lifestyle variations for fitness brand</p>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%201_37PM-dflf3Gz5zJgBC6E8WpJmGoSmFQmQsN.png"
                alt="Social media ad creatives"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
              <div>
                <h3 className="font-semibold text-foreground">Social Media Ad Pack</h3>
                <p className="text-sm text-foreground/70">20+ variations for split testing</p>
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20September%2009%2C%202025%20-%201_54PM-Vvco1WichY4nU4n9hTUFeJy8iNVddA.png"
                alt="Product testimonial creative"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
              <div>
                <h3 className="font-semibold text-foreground">Customer Testimonial Creative</h3>
                <p className="text-sm text-foreground/70">High-converting social proof ad</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed with explicit colors and isolation */}
      <section className="py-20 bg-primary relative isolate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance" style={{ color: "white" }}>
              Ready to Transform Your Product Visuals?
            </h2>
            <p className="text-xl text-white/90 text-pretty" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Join 500+ brands using AI-powered visuals to increase conversions and reduce marketing costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold"
                style={{ borderColor: "white", color: "white" }}
              >
                View Upwork Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">AI Visual Pro</span>
              </div>
              <p className="text-foreground/70">Professional AI-powered visual content for modern brands</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>Product Photography</li>
                <li>Ad Creatives</li>
                <li>AI Training</li>
                <li>Custom Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>Portfolio</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>
                  <a href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <a
                    href="https://www.upwork.com/services/product/design-create-10-professional-product-lifestyle-shots-using-advanced-ai-1965315632243833872"
                    className="hover:text-foreground transition-colors"
                  >
                    Upwork Profile
                  </a>
                </li>
                <li>
                  <a href="http://www.podcastpro.online" className="hover:text-foreground transition-colors">
                    Podcast Pro
                  </a>
                </li>
                <li>Email</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-foreground/70">
            <p>&copy; 2024 AI Visual Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
