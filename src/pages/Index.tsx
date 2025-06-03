
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Clock, Award, MessageCircle, Shield, Star, ArrowRight, Palette, BookOpen, Video, Download, Eye, Brush, PenTool } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Gleiverson Duarte Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 mb-4">
              <span className="text-2xl font-bold text-white">GD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              GLEIVERSON DUARTE
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aprenda a desenhar retratos realistas <span className="text-orange-500">à mão livre</span>, mesmo que esteja começando do zero.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desenhar rostos proporcionais e harmônicos totalmente à mão livre é mais simples do que você imagina.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-bold">
            QUERO ENTRAR AGORA
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Veja o que os alunos estão achando do curso.</h3>
          <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center mb-8">
            <div className="text-gray-600 text-lg">
              <Video className="w-16 h-16 mx-auto mb-4" />
              Curso de desenho de retratos - Video Preview
            </div>
          </div>
        </div>
      </section>

      {/* V.E.R. Method Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O ÚNICO MÉTODO QUE É <span className="text-orange-500 underline">À MÃO LIVRE DE VERDADE</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Diferente de muitos métodos que você precisa gastar com equipamentos como mesa de luz ou outra forma de fazer decalques, na nossa Escola você aprende a fazer os desenhos à mão livre, aprendendo a lógica por trás da estrutura do esboço.
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-12">
            O Método V.E.R. foi pensado para você usar apenas materiais básicos e para que o Hobby de desenhar seja algo simples e acessível!
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            Imagine a sensação de fazer um desenho como esses abaixo totalmente à mão livre...
          </p>

          {/* Portrait Examples */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-600">Portrait Example 1</span>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-600">Portrait Example 2</span>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-600">Portrait Example 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* You Don't Need to Know How to Draw */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                VOCÊ <span className="text-orange-500">NÃO PRECISA</span> SABER DESENHAR
              </h3>
              <div className="space-y-6 text-lg text-gray-700">
                <p className="font-semibold">Porque eu vou te ensinar como do Zero.</p>
                <p>
                  Você terá acesso a aulas com uma didática eficiente para aprender de forma objetiva.
                </p>
                <p>
                  <span className="underline">Não importa se você ainda não sabe nada ou se já desenha.</span> Vou te ensinar desde a base até o desenho final e você terá todo suporte para isso.
                </p>
                <p>
                  E não se engane... mesmo que você já saiba desenhar, você ainda irá aproveitar muito.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-gray-600">Portrait Drawing Example</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Modules Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            10 MÓDULOS PARA TE ENSINAR <span className="text-orange-500">TUDO SOBRE O MELHOR MÉTODO DE DESENHOS REALISTAS</span> À MÃO LIVRE
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { 
                title: "INTRODUÇÃO", 
                image: "Portrait sketch", 
                description: "Fundamentos básicos do desenho realista" 
              },
              { 
                title: "SOMBREADO", 
                image: "Sphere shading", 
                description: "Técnicas de luz e sombra" 
              },
              { 
                title: "NARIZ", 
                image: "Nose detail", 
                description: "Anatomia e proporções do nariz" 
              },
              { 
                title: "BOCA E LÁBIOS", 
                image: "Mouth detail", 
                description: "Estrutura e expressão dos lábios" 
              },
              { 
                title: "OLHOS", 
                image: "Eye detail", 
                description: "O elemento mais expressivo do rosto" 
              },
              { 
                title: "PERFIL", 
                image: "Profile view", 
                description: "Desenho de perfil e perspectiva lateral" 
              }
            ].map((module, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center mb-4">
                    <span className="text-gray-600 text-sm">{module.image}</span>
                  </div>
                  <CardTitle className="text-gray-900 flex items-center justify-between">
                    {module.title}
                    <ArrowRight className="w-5 h-5 text-orange-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            TENHA ACESSO COMPLETO AO CURSO <span className="text-orange-500">E RECEBA 6 BÔNUS EXCLUSIVOS!</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "BÔNUS #1",
                subtitle: "COMO ATRAIR SEGUIDORES E TRANSFORMÁ-LOS EM FÃS E COMPRADORES",
                description: "O poder da melhoria contínua. Redes sociais - De seguidores a fãs."
              },
              {
                title: "BÔNUS #2", 
                subtitle: "ENCOMENDAS COM O ARTISTA FÁBIO GONÇALVES",
                description: "Um bate papo aprendendo com o grande artista Fábio Gonçalves, sobre a experiência dele com encomendas para vários países."
              },
              {
                title: "BÔNUS #3",
                subtitle: "PLANILHA PARA CONSTRUÇÃO DE NARRAÇÃO DE TUTORIAL", 
                description: "Nessa aula eu vou te ensinar passo a passo como utilizar a planilha automática que fiz para as narrações dos meus tutoriais."
              },
              {
                title: "BÔNUS #4",
                subtitle: "EDIÇÃO DE VÍDEO DE ARTE",
                description: "Nessa aula eu te ensino passo a passo como utilizar o programa Camtasia e editar seus vídeos de desenho."
              },
              {
                title: "BÔNUS #5", 
                subtitle: "BANCO DE REFERÊNCIAS PARA SEUS EXERCÍCIOS",
                description: "Vou disponibilizar um banco de imagens pra você baixar e usar como referências nos seus exercícios."
              }
            ].map((bonus, index) => (
              <Card key={index} className="border-gray-200 text-left">
                <CardHeader>
                  <Badge variant="outline" className="w-fit border-orange-500 text-orange-600 font-bold">{bonus.title}</Badge>
                  <CardTitle className="text-gray-900 text-lg">{bonus.subtitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 flex items-start">
                    <span className="text-orange-500 mr-2">✏️</span>
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">O Melhor Suporte</span> em um curso de desenho
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Seus exercícios serão analisados por mim e eu pontuarei onde precisa ser corrigido e se será ou não necessário refazer o exercício.
          </p>
          <p className="text-gray-600 mb-6">Você receberá total incentivo dos colegas da sua turma.</p>
          <p className="text-lg text-gray-700 mb-8">
            Após 7 dias o professor Gleiverson Duarte entrará em contato com você para te acompanhar na sua jornada e te incluir no grupo.
          </p>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-8">Quem será o seu professor?</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-80 h-80 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white">Professor Gleiverson Photo</span>
            </div>
            <div className="flex-1 space-y-4 text-lg">
              <p><strong>Olá, muito prazer. Me chamo Gleiverson Duarte!</strong></p>
              <p>
                Sou desenhista, especializado em retratos realistas à grafite com mais de 20 anos de prática e muito estudo.
              </p>
              <p>
                Fui professor de desenhos realistas no presencial e agora me dedico aos meus alunos espalhados pelo mundo.
              </p>
              <p>
                Depois de uma pausa para trabalhar no varejo de 2010 a 2015, eu descobri que estava infeliz naquela rotina e decidi me reconectar com a arte do realismo e de lá pra cá, estou vivendo os melhores anos da minha vida.
              </p>
              <p>
                Hoje sou casado com a Ana, pai da Laura e do Gabriel e gravo as minhas videoaulas no meu estúdio que fica dentro do meu quarto. Através da arte, eu posso estar mais perto da minha família.
              </p>
              <p>
                <strong>E agora, eu quero convidar você para começar a desenhar um novo capítulo da sua vida.</strong>
              </p>
              <p className="text-orange-500 font-bold">Você topa?!</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold mt-6">
                QUERO GARANTIR A MINHA VAGA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price and Offer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full mb-6">
              <span className="text-white font-bold">GD</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">GARANTA JÁ O SEU ACESSO</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-6">Curso Desenho Realista à Mão Livre</h4>
            
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              {[
                "Acesso vitalício",
                "Análises dos exercícios com o professor Gleiverson por 1 ano",
                "Acesso permanente ao grupo de WhatsApp e comunidade do Facebook"
              ].map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-orange-500 mr-2">✏️</span>
                  {feature}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 mb-4">pelo pagamento único de apenas:</p>
            
            <div className="mb-6">
              <div className="text-5xl font-bold text-orange-500 mb-2">497,00</div>
              <div className="text-gray-600">Ou 12 x 54,47</div>
            </div>

            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-full w-full mb-4">
              QUERO GARANTIR O MEU ACESSO
            </Button>
            
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2" />
              Compra segura
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 relative">
            <div className="text-white font-bold text-lg">7<br/>DIAS</div>
            <div className="absolute -top-2 -right-2 text-yellow-600">
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            GARANTIA INCONDICIONAL DE <span className="text-yellow-600">7 DIAS</span>
          </h3>
          <div className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
            <p>
              Você pode assistir as aulas, e se por qualquer motivo você não ficar satisfeito ou não se adaptar, basta entrar em contato com a minha equipe dentro do prazo de 7 dias e solicitar o reembolso do valor investido.
            </p>
            <p><strong>Você receberá de volta cada centavo que pagou.</strong></p>
            <p className="font-semibold">Eu estou tirando todo o risco das suas mãos e colocando nas minhas.</p>
            <p><strong>Faça sua inscrição agora mesmo e veja com seus próprios olhos.</strong></p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">PERGUNTAS FREQUENTES</h3>
          <div className="space-y-4">
            {[
              "Como vou receber o meu acesso?",
              "Por quanto tempo terei acesso ao curso?", 
              "Onde poderei tirar as minhas dúvidas?",
              "Quais as formas de pagamento?",
              "É muito caro para começar a fazer desenhos realistas?"
            ].map((question, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">{question}</h4>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-8">
              Garanta agora mesmo a sua vaga para o Curso Desenho Realista à Mão Livre e aproveite todos os benefícios e bônus exclusivos para alunos.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-full">
              QUERO GARANTIR A MINHA VAGA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">Gleiverson Duarte 2023 © - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
