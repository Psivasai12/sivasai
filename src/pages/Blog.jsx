
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
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="container mx-auto mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DevOps Blog</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Stay updated with the latest DevOps trends, best practices, and technical insights.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles by title..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-6 md:gap-8 mb-12"
        >
          {currentArticles.length > 0 ? (
            currentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white hover:text-green-400 transition-colors">
                      <a
                        href={article.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group"
                      >
                        {article.title}
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{article.snippet}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                      asChild
                    >
                      <a href={article.mediumUrl} target="_blank" rel="noopener noreferrer">
                        Read on Medium
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
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No articles found matching "{searchTerm}". Try a different search term.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mb-12"
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-700"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer hover:bg-gray-700"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-700"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
