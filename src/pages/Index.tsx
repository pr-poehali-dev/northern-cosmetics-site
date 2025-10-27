import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Nordica</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О бренде</a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Продукция</a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                Сила северной природы
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Натуральная косметика, созданная из даров арктической природы. Чистота ледников, сила северных трав.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Смотреть продукцию
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted">
              <img 
                src="https://cdn.poehali.dev/projects/3a83cf4c-95dd-4673-a014-99ecc00b2eb9/files/d67c167f-2e79-4801-a58a-2de3687934fc.jpg" 
                alt="Северная природа" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/3a83cf4c-95dd-4673-a014-99ecc00b2eb9/files/c941a0b2-122c-4290-8579-85c8643f46d4.jpg" 
                alt="О бренде" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-foreground">О бренде</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы создаём косметику, вдохновлённую чистотой и силой северной природы. Каждый наш продукт — это результат тщательного отбора натуральных ингредиентов из арктических регионов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Северные ягоды, травы и минералы содержат уникальные антиоксиданты и витамины, которые защищают кожу от суровых условий и сохраняют её молодость.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="text-sm text-muted-foreground">100% натуральные ингредиенты</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">❄️</div>
                  <p className="text-sm text-muted-foreground">Арктические компоненты</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-sm text-muted-foreground">Экологичное производство</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">Откройте для себя силу северных ингредиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Крем для лица",
                description: "С экстрактом северной морошки и маслом облепихи",
                price: "2 890 ₽"
              },
              {
                name: "Сыворотка для лица",
                description: "На основе арктической розы и витамина С",
                price: "3 490 ₽"
              },
              {
                name: "Маска для лица",
                description: "С глиной из северных озёр и брусникой",
                price: "1 990 ₽"
              },
              {
                name: "Крем для рук",
                description: "С маслом кедра и экстрактом ромашки",
                price: "1 290 ₽"
              },
              {
                name: "Бальзам для губ",
                description: "С пчелиным воском и северными ягодами",
                price: "690 ₽"
              },
              {
                name: "Гель для умывания",
                description: "С экстрактом иван-чая и берёзовым соком",
                price: "1 490 ₽"
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 bg-muted">
                  <img 
                    src="https://cdn.poehali.dev/projects/3a83cf4c-95dd-4673-a014-99ecc00b2eb9/files/38587e3b-6fdb-488e-b7d2-6dde4d1d5552.jpg" 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-semibold text-primary">{product.price}</span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Санкт-Петербург, Невский пр., д. 1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (812) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@nordica-cosmetics.ru</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="ваш@email.ru"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Ваше сообщение"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Nordica. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;