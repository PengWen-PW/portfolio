import Image from "next/image"
import Link from "next/link"
import { Mail, ExternalLink, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { 
  AnimatedSection, 
  AnimatedCard, 
  ParticleBackground, 
  AnimatedGradientBackground 
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      <Navbar />

      <HeroSection />

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">教育背景</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">硕士</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">中国科学院大学（双一流）</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">中国科学院武汉文献情报中心</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2023.09 - 2026.06</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">情报学</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">专利分析方法与技术</Badge>
                  <Badge variant="secondary">机器学习</Badge>
                  <Badge variant="secondary">数据科学导论</Badge>
                  <Badge variant="secondary">现代情报学理论与方法</Badge>
                  <Badge variant="secondary">科学计量学</Badge>
                  <Badge variant="secondary">Python应用</Badge>
                  <Badge variant="secondary">数据挖掘</Badge>
                  <Badge variant="secondary">数据库原理</Badge>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">本科</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">郑州大学（211）</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2019.09 - 2023.06</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">信息管理与信息系统</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python应用</Badge>
                  <Badge variant="secondary">Tableau商务智能</Badge>
                  <Badge variant="secondary">管理信息系统</Badge>
                  <Badge variant="secondary">数据挖掘</Badge>
                  <Badge variant="secondary">数据库原理</Badge>
                  <Badge variant="secondary">数据可视化</Badge>
                  <Badge variant="secondary">商务智能</Badge>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">关于我</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  硕士期间研究方向是科学计量学与应用，发表过一篇SSCI Q1论文。具备扎实的分析能力和量化思维。
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  拥有从数据采集、清洗、分析到可视化呈现的完整数据处理能力，熟练掌握Python、SQL、SPSS、Stata、Tableau等工具。
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  对AI技术应用有深入理解，项目中有调用主流LLMs API、prompt优化的经历，并在自学dify、coze等AI工具。
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  求职意向是产品经理，因为符合个人价值观。为此自学了Axure工具。
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  性格开朗易相处，具备优秀的沟通协作能力，擅长需要细心的工作，有极强的上进心和责任感。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">核心技能</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      数据分析与可视化（Python、SQL、SPSS、Stata、Tableau）
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      产品设计与AI应用（Axure、LLM API、Prompt工程、Dify/Coze）
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      项目管理与团队协作（团支书、学生会、模联经验）
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      数据挖掘与信息抽取（Selenium爬虫、Deepseek API应用）
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">学生工作经历</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">团支书</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">郑州大学 班级</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">大二至大四</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>组织开展20+次团日活动、生活会等，撰写活动策划、总结、宣发材料等40+篇</li>
                  <li>打造特色团日活动，获院里唯一校级"五四红旗团支部"称号</li>
                  <li>自编导的党史舞台剧节目获省级优秀奖，校外实践主题团日活动获院级优秀团日活动奖</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">商务部副部长</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">郑州大学模拟联合国协会 院级学生会</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">大二</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>保障模联大会经费与物资，调研部门需求制定预算，确定目标合作方</li>
                  <li>撰写策划案与协议书，设计校园推广权益</li>
                  <li>成功对接2家企业达成赞助合作</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">文艺部副部长</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">院级学生会</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">大二</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>负责歌手大赛、迎新晚会等活动的报名、筛选、排练、现场调动等</li>
                  <li>曾编导一场舞台剧在省级比赛中获奖</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">项目经历</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>"小宇宙"APP社交功能的优化</CardTitle>
                  <CardDescription>模拟项目 · 2025.11–至今</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/portfolio/images/project-1.png" alt="小宇宙APP" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 竞品分析：通过SWOT、PEST等模型完成与荔枝、喜马拉雅等平台的对比</li>
                    <li>• 产品规划设计：完善点评功能逻辑，实现"收听-标记-点评-互动"闭环</li>
                    <li>• 构建PRD：利用Axure绘制高保真交互原型图</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">产品设计</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Axure</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">PRD</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.15}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>数据驱动的我国预印本论文科研态势及平台发展现状调研</CardTitle>
                  <CardDescription>科研项目 · 2024.09–2025.12</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/portfolio/images/project-2.png" alt="预印本论文调研" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 数据采集：Python爬取arXiv平台40万+篇论文</li>
                    <li>• AI模型优化：测试对比10+不同版本AI，prompt优化提升精度</li>
                    <li>• 调用Deepseek API批量转化文本为JSON结构化输出</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Python</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Selenium</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Deepseek API</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">数据可视化</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>探究审稿人公开身份对同行评议进程的影响</CardTitle>
                  <CardDescription>硕士毕业论文 · 2024.07–至今</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/portfolio/images/project-3.png" alt="同行评议研究" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 项目介绍：关注审稿人公开身份对公平性的影响，获学术会议二等奖</li>
                    <li>• 数据获取：Python爬取BMC期刊20万+文章PDF</li>
                    <li>• AI辅助评价：调用Deepseek3 API批量评价指标得分</li>
                    <li>• 统计建模：OLS、PSM、中介效应分析等回归分析</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Python</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Deepseek API</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">统计分析</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">SSCI Q1</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.25}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>宁德时代锂电池正极技术专利布局与技术趋势洞察</CardTitle>
                  <CardDescription>专利分析项目 · 2023.10–2024.01</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/portfolio/images/project-4.png" alt="专利分析" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 数据采集：基于incopat等专利数据库提取2397条专利数据</li>
                    <li>• 指标搭建：构建"创新力-控制力-发展力"3维评价体系</li>
                    <li>• 分析框架：从核心度锁定宁德时代在高镍三元材料领域的专利壁垒</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">专利分析</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Incopat</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Tableau</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>中文社交媒体问题性使用（PSMU）测量量表的开发及应用</CardTitle>
                  <CardDescription>行为研究项目 · 2021.09–2022.09</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/portfolio/images/project-5.png" alt="PSMU量表" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 项目介绍：弥补中文环境PSMU测量量表的缺失，主导行为研究产出论文</li>
                    <li>• 用户访谈：对30位用户进行深度访谈，提取PSMU关键特征</li>
                    <li>• 问卷调查：收回600+份问卷，运用SPSS和Amos进行因子分析</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">SPSS</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Amos</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">问卷调查</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.35}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>基于bioRxiv预印本论文探究修订程度与学术影响力的相关性</CardTitle>
                  <CardDescription>SSCI Q1论文 · 2023.01–2023.12</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/portfolio/images/project-6.jpg" alt="bioRxiv论文" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 项目介绍：SSCI Q1区论文，量化同行评议中论文修订程度对被引频次的影响</li>
                    <li>• 数据获取：通过bioRxiv API获取论文PDF/HTML，提取文本数据</li>
                    <li>• 量化指标：应用cosine、Levenshtein算法计算修订程度</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">Python</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">bioRxiv API</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">OLS回归</Badge>
                    <Badge variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50">SSCI Q1</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">技能专长</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">数</span>
                    </span>
                    数据分析与可视化
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">Python</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">SQL</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">SPSS</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">Stata</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">Tableau</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">Pandas</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">NumPy</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">Matplotlib</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">AI</span>
                    </span>
                    AI与产品应用
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">Axure</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">LLM API</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">Prompt工程</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">Dify</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">Coze</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">Deepseek API</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">产品设计</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">PRD撰写</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">挖</span>
                    </span>
                    数据挖掘与爬虫
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">Selenium</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">Requests</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">正则表达式</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">数据清洗</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">JSON处理</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">API调用</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">管</span>
                    </span>
                    项目管理与协作
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">活动策划</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">预算管理</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">团队协作</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">跨部门沟通</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">文档撰写</Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">报告撰写</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">荣誉奖项</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedCard delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 border-l-4 border-yellow-500">
                <h4 className="font-semibold text-lg">校级优秀毕业生</h4>
                <p className="text-gray-600 dark:text-gray-400">郑州大学</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.25}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 border-l-4 border-purple-500">
                <h4 className="font-semibold text-lg">多次校级一等奖学金</h4>
                <p className="text-gray-600 dark:text-gray-400">郑州大学</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 border-l-4 border-blue-500">
                <h4 className="font-semibold text-lg">多次校级三好学生</h4>
                <p className="text-gray-600 dark:text-gray-400">郑州大学</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.35}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 border-l-4 border-green-500">
                <h4 className="font-semibold text-lg">多次校级优秀学生干部</h4>
                <p className="text-gray-600 dark:text-gray-400">郑州大学</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">联系我</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:pengwen23@mails.ucas.ac.cn"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      pengwen23@mails.ucas.ac.cn
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    期待产品经理、数据分析、战略研究或和AI相关的岗位机会。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">彭雯</h2>
              <p className="text-gray-400">情报学硕士</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="mailto:pengwen23@mails.ucas.ac.cn"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} 彭雯. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
