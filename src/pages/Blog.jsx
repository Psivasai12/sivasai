
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogArticles = [
  {
    id: 1,
    title: "Docker Containerization Best Practices for DevOps Teams",
    snippet: "Learn essential Docker practices that will streamline your containerization workflow and improve deployment efficiency.",
    author: "DevOps Engineer",
    date: "2024-01-15",
    mediumUrl: "https://medium.com/@devops/docker-best-practices",
  },
  {
    id: 2,
    title: "Kubernetes Deployment Strategies: Rolling Updates vs Blue-Green",
    snippet: "Compare different deployment strategies in Kubernetes and learn when to use each approach for maximum uptime.",
    author: "Cloud Architect",
    date: "2024-01-10",
    mediumUrl: "https://medium.com/@cloudarch/kubernetes-deployment-strategies",
  },
  {
    id: 3,
    title: "Git Workflow Optimization for Large Development Teams",
    snippet: "Discover advanced Git workflows that scale with your team size and improve collaboration efficiency.",
    author: "Senior Developer",
    date: "2024-01-08",
    mediumUrl: "https://medium.com/@developer/git-workflow-optimization",
  },
  {
    id: 4,
    title: "Infrastructure as Code with Terraform: A Complete Guide",
    snippet: "Master Terraform fundamentals and learn how to manage your cloud infrastructure declaratively.",
    author: "Infrastructure Engineer",
    date: "2024-01-05",
    mediumUrl: "https://medium.com/@infrastructure/terraform-complete-guide",
  },
  {
    id: 5,
    title: "CI/CD Pipeline Security: Protecting Your Deployment Process",
    snippet: "Implement security best practices in your CI/CD pipelines to prevent vulnerabilities and data breaches.",
    author: "Security Specialist",
    date: "2024-01-03",
    mediumUrl: "https://medium.com/@security/cicd-pipeline-security",
  },
  {
    id: 6,
    title: "Monitoring and Observability in Microservices Architecture",
    snippet: "Build comprehensive monitoring solutions for distributed systems using modern observability tools.",
    author: "Site Reliability Engineer",
    date: "2023-12-28",
    mediumUrl: "https://medium.com/@sre/monitoring-microservices",
  },
  {
    id: 7,
    title: "AWS Auto Scaling: Optimizing Cost and Performance",
    snippet: "Learn how to configure AWS Auto Scaling to balance cost efficiency with application performance.",
    author: "Cloud Engineer",
    date: "2023-12-25",
    mediumUrl: "https://medium.com/@cloud/aws-auto-scaling",
  },
  {
    id: 8,
    title: "GitOps: The Future of Continuous Deployment",
    snippet: "Explore GitOps principles and implement declarative continuous deployment workflows.",
    author: "DevOps Consultant",
    date: "2023-12-22",
    mediumUrl: "https://medium.com/@consultant/gitops-future",
  },
  {
    id: 9,
    title: "Database Migration Strategies in Cloud Environments",
    snippet: "Execute seamless database migrations to the cloud with minimal downtime and data loss prevention.",
    author: "Database Administrator",
    date: "2023-12-20",
    mediumUrl: "https://medium.com/@dba/database-migration-strategies",
  },
  {
    id: 10,
    title: "Load Balancing Techniques for High-Traffic Applications",
    snippet: "Implement effective load balancing strategies to ensure your applications can handle massive traffic loads.",
    author: "Performance Engineer",
    date: "2023-12-18",
    mediumUrl: "https://medium.com/@performance/load-balancing-techniques",
  },
];

const ARTICLES_PER_PAGE = 10;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    return blogArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto mt-8 px-4 max-w-6xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 py-16"
          >
            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                DevOps Blog
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest DevOps trends, best practices, and technical insights
              </p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-50"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.05] rounded-xl p-1 border border-white/20">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-12 bg-transparent border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400/50 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 mb-12"
          >
            {currentArticles.length > 0 ? (
              currentArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-xl bg-white/[0.03] border-white/10 hover:bg-white/[0.05] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] rounded-xl overflow-hidden">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white hover:text-blue-300 transition-colors">
                        <a
                          href={article.mediumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 group text-lg lg:text-xl"
                        >
                          <span className="flex-1">{article.title}</span>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-blue-400" />
                        </a>
                      </CardTitle>
                      <div className="flex items-center gap-6 text-sm text-gray-400 pt-2">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 leading-relaxed mb-4 text-base">{article.snippet}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 rounded-lg"
                        asChild
                      >
                        <a href={article.mediumUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Read on Medium
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="backdrop-blur-xl bg-white/[0.03] rounded-xl p-8 border border-white/10">
                  <p className="text-gray-400 text-lg">
                    No articles found matching "{searchTerm}". Try a different search term.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center mb-12"
            >
              <div className="backdrop-blur-xl bg-white/[0.05] rounded-xl p-2 border border-white/20">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-white/20 transition-colors text-gray-300"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer hover:bg-white/20 transition-colors data-[active=true]:bg-blue-500/20 data-[active=true]:text-blue-400 text-gray-300"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-white/20 transition-colors text-gray-300"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </motion.div>
          )}
        </main>
      </div>

      <div className="relative z-10 mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
