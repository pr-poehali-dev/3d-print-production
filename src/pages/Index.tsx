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
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-sm z-50 border-b-4 border-primary shadow-lg shadow-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-black text-foreground flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Icon name="Factory" size={24} className="text-primary-foreground" />
            </div>
            <span className="tracking-wider">INDUSTRIAL 3D</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block font-bold tracking-wider">ЗАКАЗАТЬ</Button>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden industrial-grid">
        <div className="absolute inset-0 warning-stripes opacity-30" />
        <div className="absolute top-10 left-0 w-2 h-full bg-primary" />
        <div className="absolute top-10 right-0 w-2 h-full bg-primary" />
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-black mb-8 animate-fade-in" style={{clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'}}>
            <Icon name="AlertTriangle" size={20} />
            <span className="tracking-widest">ПРОИЗВОДСТВЕННАЯ ЗОНА</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in text-foreground">
            ПРОИЗВОДСТВО ИЗДЕЛИЙ ПРИ ПОМОЩИ 3D ПЕЧАТИ
          </h1>
          <p className="text-lg text-muted-foreground mb-10 animate-fade-in uppercase tracking-wide" style={{ animationDelay: '0.2s' }}>
            Промышленное производство | Точность | Надёжность
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-base px-10 py-6 font-bold tracking-wider">
              <Icon name="Cog" className="mr-2" size={20} />
              ЗАПУСТИТЬ ПРОЕКТ
            </Button>
            <Button size="lg" variant="outline" className="text-base px-10 py-6 font-bold tracking-wider border-2">
              <Icon name="FileText" className="mr-2" size={20} />
              ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 relative bg-muted/30">
        <div className="absolute inset-0 industrial-grid opacity-20" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="metal-panel text-center p-8 animate-slide-up">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-primary animate-pulse" />
                <div className="text-5xl font-black text-primary">500+</div>
              </div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm font-bold">Готовых проектов</div>
            </div>
            <div className="metal-panel text-center p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="text-5xl font-black text-primary">24ч</div>
              </div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm font-bold">Средний срок печати</div>
            </div>
            <div className="metal-panel text-center p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-primary animate-pulse" style={{ animationDelay: '0.6s' }} />
                <div className="text-5xl font-black text-primary">99%</div>
              </div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm font-bold">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 relative industrial-grid">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-muted border-l-4 border-primary">
                <Icon name="Briefcase" size={24} className="text-primary" />
                <span className="text-sm font-bold tracking-widest text-muted-foreground">КАТАЛОГ ПРОЕКТОВ</span>
              </div>
            </div>
            <h2 className="text-4xl font-black text-foreground mb-4">ПОРТФОЛИО РАБОТ</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
              Реализованные промышленные проекты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group overflow-hidden cursor-pointer border-4 border-border transition-all duration-300 hover:border-primary animate-scale-in metal-panel"
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-primary" />
                        <div className="text-xs font-black text-primary tracking-widest">{project.category.toUpperCase()}</div>
                      </div>
                      <h3 className="text-xl font-black mb-2 text-foreground uppercase">{project.title}</h3>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-muted/30 relative">
        <div className="absolute inset-0 industrial-grid opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-muted border-l-4 border-primary">
                <Icon name="Settings" size={24} className="text-primary" />
                <span className="text-sm font-bold tracking-widest text-muted-foreground">ТЕХНОЛОГИИ</span>
              </div>
            </div>
            <h2 className="text-4xl font-black text-foreground mb-4">УСЛУГИ 3D ПЕЧАТИ</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
              Промышленные технологии для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="metal-panel p-6 text-center hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary flex items-center justify-center">
                  <Icon name={service.icon as any} size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-3 uppercase tracking-wide">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="warning-stripes p-1">
              <div className="bg-primary text-primary-foreground p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <Icon name="AlertCircle" size={32} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-black mb-2 uppercase tracking-wide">ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ</h3>
                      <p className="text-primary-foreground/90 text-sm uppercase tracking-wide">Консультация по сложным проектам</p>
                    </div>
                  </div>
                  <Button size="lg" variant="secondary" className="whitespace-nowrap font-bold tracking-wider">
                    СВЯЗАТЬСЯ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative industrial-grid">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-muted border-l-4 border-primary">
                <Icon name="MessageSquare" size={24} className="text-primary" />
                <span className="text-sm font-bold tracking-widest text-muted-foreground">КОНТАКТЫ</span>
              </div>
            </div>
            <h2 className="text-4xl font-black text-foreground mb-4">ЗАПРОС НА ПРОИЗВОДСТВО</h2>
            <p className="text-base text-muted-foreground uppercase tracking-wide">
              Технические спецификации и расчёт стоимости
            </p>
          </div>

          <div className="metal-panel p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">Имя</label>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" className="h-12" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">Техническое задание</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте: что нужно напечатать, в каком количестве, какие требования..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button size="lg" className="w-full text-base font-black tracking-widest py-6">
                <Icon name="Send" className="mr-2" size={20} />
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </form>
          </div>

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

      <footer className="py-12 px-6 border-t-4 border-primary bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xl font-black text-foreground flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Icon name="Factory" size={24} className="text-primary-foreground" />
              </div>
              <span className="tracking-wider">INDUSTRIAL 3D</span>
            </div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider">© 2024 ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
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