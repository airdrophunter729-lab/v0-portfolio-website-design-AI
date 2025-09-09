import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: "ai-product-photography-guide-2024",
    title: "The Complete Guide to AI Product Photography in 2024",
    excerpt:
      "Discover how AI-powered product photography is revolutionizing e-commerce visuals. Learn the tools, techniques, and best practices that top brands use to create stunning product images without expensive photo shoots.",
    category: "AI Photography",
    readTime: "8 min read",
    publishDate: "December 15, 2024",
    author: "AI Visual Pro",
    image: "/ai-product-photography-setup-with-camera-and-produ.jpg",
    tags: ["AI Photography", "E-commerce", "Product Marketing", "Visual Content"],
  },
  {
    id: "high-converting-ad-creatives-2024",
    title: "10 High-Converting Ad Creative Strategies That Actually Work in 2024",
    excerpt:
      "Uncover the psychology behind high-performing ad creatives. From color psychology to composition techniques, learn how to create ads that stop the scroll and drive conversions across all platforms.",
    category: "Ad Creatives",
    readTime: "12 min read",
    publishDate: "December 12, 2024",
    author: "AI Visual Pro",
    image: "/high-converting-social-media-ads-on-mobile-devices.jpg",
    tags: ["Ad Creatives", "Conversion Optimization", "Social Media Marketing", "Split Testing"],
  },
  {
    id: "ai-tools-small-business-marketing",
    title: "Best AI Tools for Small Business Marketing in 2024",
    excerpt:
      "Level the playing field with enterprise-grade AI marketing tools. Discover affordable AI solutions that help small businesses create professional marketing materials, automate campaigns, and compete with larger brands.",
    category: "AI Tools",
    readTime: "10 min read",
    publishDate: "December 10, 2024",
    author: "AI Visual Pro",
    image: "/small-business-owner-using-ai-marketing-tools-on-l.jpg",
    tags: ["AI Tools", "Small Business", "Marketing Automation", "Digital Marketing"],
  },
  {
    id: "lifestyle-product-photography-trends",
    title: "Lifestyle Product Photography Trends Dominating 2024",
    excerpt:
      "Stay ahead of visual trends that capture attention and drive sales. Explore the latest lifestyle photography styles, from authentic user-generated content aesthetics to AI-enhanced environmental storytelling.",
    category: "Photography Trends",
    readTime: "7 min read",
    publishDate: "December 8, 2024",
    author: "AI Visual Pro",
    image: "/trendy-lifestyle-product-photography-with-natural-.jpg",
    tags: ["Photography Trends", "Lifestyle Photography", "Visual Marketing", "Brand Storytelling"],
  },
  {
    id: "split-testing-ad-creatives-guide",
    title: "The Ultimate Guide to Split Testing Ad Creatives for Maximum ROI",
    excerpt:
      "Master the art and science of A/B testing your ad creatives. Learn how to set up meaningful tests, interpret results, and scale winning variations to maximize your advertising return on investment.",
    category: "Performance Marketing",
    readTime: "15 min read",
    publishDate: "December 5, 2024",
    author: "AI Visual Pro",
    image: "/split-testing-dashboard-showing-ad-performance-met.jpg",
    tags: ["Split Testing", "Performance Marketing", "ROI Optimization", "Data Analytics"],
  },
  {
    id: "ai-generated-content-brand-authenticity",
    title: "Maintaining Brand Authenticity with AI-Generated Visual Content",
    excerpt:
      "Balance efficiency with authenticity in your visual content strategy. Learn how to use AI tools while preserving your brand's unique voice and maintaining customer trust in an AI-driven marketplace.",
    category: "Brand Strategy",
    readTime: "9 min read",
    publishDate: "December 3, 2024",
    author: "AI Visual Pro",
    image: "/authentic-brand-content-creation-with-ai-assistanc.jpg",
    tags: ["Brand Authenticity", "AI Content", "Brand Strategy", "Customer Trust"],
  },
  {
    id: "ecommerce-visual-content-strategy",
    title: "Building a Winning E-commerce Visual Content Strategy in 2024",
    excerpt:
      "Transform browsers into buyers with strategic visual content. Discover how to create a cohesive visual identity across all touchpoints, from product pages to social media, that drives conversions and builds brand loyalty.",
    category: "E-commerce Strategy",
    readTime: "11 min read",
    publishDate: "November 30, 2024",
    author: "AI Visual Pro",
    image: "/ecommerce-visual-content-strategy-planning-session.jpg",
    tags: ["E-commerce", "Visual Strategy", "Content Marketing", "Brand Identity"],
  },
  {
    id: "social-media-visual-content-2024",
    title: "Social Media Visual Content That Drives Engagement in 2024",
    excerpt:
      "Cut through the noise with visuals that demand attention. Learn platform-specific strategies, optimal formats, and creative techniques that boost engagement rates and grow your social media presence organically.",
    category: "Social Media",
    readTime: "8 min read",
    publishDate: "November 28, 2024",
    author: "AI Visual Pro",
    image: "/engaging-social-media-visual-content-on-various-pl.jpg",
    tags: ["Social Media Marketing", "Visual Content", "Engagement Strategy", "Content Creation"],
  },
  {
    id: "ai-photography-vs-traditional-photography",
    title: "AI Photography vs Traditional Photography: When to Use Each",
    excerpt:
      "Make informed decisions about your visual content production. Compare costs, quality, speed, and use cases to determine when AI photography serves your needs and when traditional photography is still the better choice.",
    category: "Photography Comparison",
    readTime: "13 min read",
    publishDate: "November 25, 2024",
    author: "AI Visual Pro",
    image: "/comparison-between-ai-and-traditional-photography-.jpg",
    tags: ["AI Photography", "Traditional Photography", "Cost Analysis", "Quality Comparison"],
  },
  {
    id: "future-of-visual-marketing-ai",
    title: "The Future of Visual Marketing: How AI is Reshaping the Industry",
    excerpt:
      "Prepare for the next wave of visual marketing innovation. Explore emerging AI technologies, predict industry shifts, and learn how to future-proof your visual marketing strategy in an rapidly evolving landscape.",
    category: "Industry Insights",
    readTime: "14 min read",
    publishDate: "November 22, 2024",
    author: "AI Visual Pro",
    image: "/futuristic-ai-visual-marketing-technology-concept.jpg",
    tags: ["Future Trends", "AI Innovation", "Visual Marketing", "Industry Analysis"],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AI Visual Pro</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#services"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Portfolio
              </Link>
              <Link href="/blog" className="text-foreground font-semibold">
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              AI Visual Marketing Insights
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Master AI-Powered
              <span className="text-primary"> Visual Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Expert insights, proven strategies, and actionable tips to transform your visual content with AI. Stay
              ahead of the curve with the latest trends and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our most comprehensive guide to AI product photography</p>
          </div>

          <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight text-balance">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest AI visual marketing strategies and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.publishDate}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Stay Ahead of AI Visual Marketing Trends
            </h2>
            <p className="text-muted-foreground text-pretty">
              Get weekly insights, case studies, and actionable tips delivered to your inbox. Join 2,000+ marketers who
              trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime. We respect your privacy.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">AI Visual Pro</span>
              </Link>
              <p className="text-muted-foreground">Professional AI-powered visual content for modern brands</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Product Photography</li>
                <li>Ad Creatives</li>
                <li>AI Training</li>
                <li>Custom Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/#portfolio" className="hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>Case Studies</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
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

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AI Visual Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
