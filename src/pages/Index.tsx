import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Промышленная деталь',
      category: 'Инженерия',
      image: 'https://cdn.poehali.dev/projects/2ab0d7c4-3c15-419a-a61f-8ffb50ad2645/files/38e10296-1d6e-4c66-8d40-487c528c8ea2.jpg',
      description: 'Прецизионная печать для промышленности'
    },
    {
      id: 2,
      title: 'Архитектурный макет',
      category: 'Архитектура',
      image: 'https://cdn.poehali.dev/projects/2ab0d7c4-3c15-419a-a61f-8ffb50ad2645/files/b5cfddeb-14d8-4cf3-907b-b9a8d194126a.jpg',
      description: 'Детализированные архитектурные модели'
    },
    {
      id: 3,
      title: 'Дизайнерский прототип',
      category: 'Дизайн',
      image: 'https://cdn.poehali.dev/projects/2ab0d7c4-3c15-419a-a61f-8ffb50ad2645/files/cdee250e-12b1-4430-a1e6-0c8f51ba02aa.jpg',
      description: 'Быстрое прототипирование идей'
    }
  ];

  const services = [
    {
      icon: 'Box',
      title: 'FDM печать',
      description: 'Послойное наплавление пластика для функциональных прототипов и изделий'
    },
    {
      icon: 'Sparkles',
      title: 'SLA печать',
      description: 'Стереолитография для высокой детализации и гладкой поверхности'
    },
    {
      icon: 'Layers',
      title: 'SLS печать',
      description: 'Селективное лазерное спекание для прочных функциональных деталей'
    },
    {
      icon: 'Palette',
      title: 'Постобработка',
      description: 'Шлифовка, покраска и финишная обработка изделий'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl z-50 border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Icon name="Cuboid" size={28} className="text-primary animate-float" />
            3D Print Studio
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Заказать</Button>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-fade-in">
            <span className="text-primary font-medium">🚀 Инновации в 3D технологиях</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Производство изделий при помощи 3D печати
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Превращаем ваши идеи в реальность с помощью передовых технологий 3D-печати
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8">
              <Icon name="Send" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="PlayCircle" className="mr-2" size={20} />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-slide-up">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground">Готовых проектов</div>
            </Card>
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">24ч</div>
              <div className="text-muted-foreground">Средний срок печати</div>
            </Card>
            <Card className="text-center p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">99%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интерактивная галерея наших лучших проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden cursor-pointer border-2 border-primary/20 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 animate-scale-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                      <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Услуги 3D печати</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр технологий для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                  <Icon name={service.icon as any} size={32} className="text-primary animate-glow" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground border-0 shadow-2xl shadow-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Не нашли нужную технологию?</h3>
                  <p className="text-primary-foreground/90">Свяжитесь с нами для консультации по вашему проекту</p>
                </div>
                <Button size="lg" variant="secondary" className="whitespace-nowrap">
                  Обсудить проект
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Расскажите о вашем проекте, и мы поможем воплотить его в жизнь
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание проекта</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте: что нужно напечатать, в каком количестве, какие требования..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button size="lg" className="w-full text-lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div className="font-medium mb-1">Email</div>
              <div className="text-muted-foreground">info@3dprint.studio</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div className="font-medium mb-1">Телефон</div>
              <div className="text-muted-foreground">+7 (999) 123-45-67</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div className="font-medium mb-1">Адрес</div>
              <div className="text-muted-foreground">Москва, ул. Примерная, 123</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20 bg-card/30 backdrop-blur">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Icon name="Cuboid" size={24} className="text-primary" />
              3D Print Studio
            </div>
            <div className="text-muted-foreground">© 2024 Все права защищены</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;