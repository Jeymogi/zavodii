
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Phone, 
  MessageSquare, 
  FileText, 
  Mail, 
  Building, 
  Bot, 
  User, 
  Settings,
  CheckCircle,
  ArrowRight,
  Calculator,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Zap,
  Star,
  Play
} from 'lucide-react';

interface RoleCard {
  role_id: string;
  название: string;
  короткое_описание: string;
  основные_задачи: string[];
  kpi_на_релиз: Array<{
    метрика: string;
    целевое: string;
  }>;
  интеграции: string[];
  безопасность: string;
  sla: string;
  зарплата_цифрового_сотрудника_от: string;
  онбординг: string;
  cta: string;
}

interface CaseCard {
  case_id: string;
  компания_и_отрасль: string;
  период: string;
  процесс_до: string;
  процесс_после: string;
  kpi: Array<{
    метрика: string;
    до?: string;
    после?: string;
    изменение?: string;
  }>;
  экономика: {
    экономия_в_мес: string;
    окупаемость: string;
  };
  роли: string[];
  как_сделали: string[];
  цитата: string;
}

const ZavodAIWebsite: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    tasksPerDay: 50,
    minutesPerTask: 15,
    hourCost: 1000,
    autoCloseRate: 60
  });

  const roles: RoleCard[] = [
    {
      role_id: "voice_contact_center",
      название: "Голосовой оператор 24/7",
      короткое_описание: "Принимает звонки, отвечает на FAQ, создает заявки круглосуточно",
      основные_задачи: [
        "Принимать и классифицировать входящие звонки",
        "Отвечать на типовые вопросы клиентов",
        "Создавать заявки в CRM системе",
        "Эскалировать сложные случаи операторам"
      ],
      kpi_на_релиз: [
        { метрика: "доля авто-закрытия", целевое: "до 70%" },
        { метрика: "время ответа", целевое: "с 25 до 2 мин" },
        { метрика: "экономия", целевое: "≈180 часов/мес" }
      ],
      интеграции: ["Телефония", "CRM", "База знаний"],
      безопасность: "ПДн, журнал действий, человек-в-контуре",
      sla: "99.5% / поддержка 24/7",
      зарплата_цифрового_сотрудника_от: "45 000 ₽/мес",
      онбординг: "150 000 ₽ единоразово",
      cta: "Запустить пилот"
    },
    {
      role_id: "crm_response_manager",
      название: "Менеджер по заявкам",
      короткое_описание: "Обрабатывает отклики, заполняет CRM, ведет диалоги с клиентами",
      основные_задачи: [
        "Обрабатывать отклики на рассылки",
        "Заполнять данные в CRM",
        "Проставлять статусы заявок",
        "Отправлять напоминания клиентам"
      ],
      kpi_на_релиз: [
        { метрика: "скорость обработки", целевое: "×5 быстрее" },
        { метрика: "экономия", целевое: "≈250 000 ₽/мес" },
        { метрика: "завершенные диалоги", целевое: "+40%" }
      ],
      интеграции: ["WhatsApp", "Telegram", "AmoCRM", "Email"],
      безопасность: "ПДн, журнал действий, человек-в-контуре",
      sla: "99.5% / поддержка в рабочие часы",
      зарплата_цифрового_сотрудника_от: "35 000 ₽/мес",
      онбординг: "120 000 ₽ единоразово",
      cta: "Запустить пилот"
    },
    {
      role_id: "tender_ai_specialist",
      название: "Специалист по тендерам",
      короткое_описание: "Собирает тендеры, проверяет требования, формирует пакеты документов",
      основные_задачи: [
        "Собирать тендеры с топ-площадок",
        "Фильтровать по требованиям компании",
        "Проводить первичную юр-проверку",
        "Формировать пакеты документов"
      ],
      kpi_на_релиз: [
        { метрика: "участий в тендерах", целевое: "×2 за месяц" },
        { метрика: "время подготовки", целевое: "-60%" },
        { метрика: "экономия", целевое: "≈120 часов/мес" }
      ],
      интеграции: ["Тендерные площадки", "СЭД", "1С"],
      безопасность: "ПДн, журнал действий, человек-в-контуре",
      sla: "99% / поддержка в рабочие часы",
      зарплата_цифрового_сотрудника_от: "55 000 ₽/мес",
      онбординг: "200 000 ₽ единоразово",
      cta: "Запустить пилот"
    },
    {
      role_id: "email_parser",
      название: "Парсер заявок из email",
      короткое_описание: "Извлекает данные из писем, валидирует и записывает в CRM",
      основные_задачи: [
        "Извлекать данные из писем и вложений",
        "Валидировать полученную информацию",
        "Записывать данные в CRM",
        "Уведомлять о новых заявках"
      ],
      kpi_на_релиз: [
        { метрика: "точность извлечения", целевое: "95%" },
        { метрика: "время обработки", целевое: "минуты вместо часов" },
        { метрика: "ошибки ввода", целевое: "-80%" }
      ],
      интеграции: ["Email", "CRM", "Файловые хранилища"],
      безопасность: "ПДн, журнал действий, человек-в-контуре",
      sla: "99.5% / поддержка в рабочие часы",
      зарплата_цифрового_сотрудника_от: "25 000 ₽/мес",
      онбординг: "80 000 ₽ единоразово",
      cta: "Запустить пилот"
    },
    {
      role_id: "doc_ops_bot",
      название: "Офис-бот документооборота",
      короткое_описание: "Сверяет акты и счета, маршрутизирует согласования",
      основные_задачи: [
        "Сверять акты и счета",
        "Маршрутизировать согласования",
        "Отправлять напоминания",
        "Контролировать сроки"
      ],
      kpi_на_релиз: [
        { метрика: "автообработка", целевое: "до 80%" },
        { метрика: "сроки согласований", целевое: "-50%" },
        { метрика: "экономия", целевое: "≈90 часов/мес" }
      ],
      интеграции: ["СЭД", "1С", "Email", "Мессенджеры"],
      безопасность: "ПДн, журнал действий, человек-в-контуре",
      sla: "99% / поддержка в рабочие часы",
      зарплата_цифрового_сотрудника_от: "40 000 ₽/мес",
      онбординг: "130 000 ₽ единоразово",
      cta: "Запустить пилот"
    },
    {
      role_id: "internal_llm_assistant",
      название: "Корпоративный LLM-ассистент",
      короткое_описание: "Отвечает по базе из 1000+ документов со ссылками на источники",
      основные_задачи: [
        "Отвечать по корпоративной базе знаний",
        "Предоставлять ссылки на источники",
        "Уточнять запросы сотрудников",
        "Обучаться на новых документах"
      ],
      kpi_на_релиз: [
        { метрика: "точность ответов", целевое: "90%" },
        { метрика: "время поиска", целевое: "-70%" },
        { метрика: "экономия", целевое: "≈200 часов/мес" }
      ],
      интеграции: ["Внутренние системы", "Telegram", "SharePoint"],
      безопасность: "ПДн, журнал действий, человек-в-контуре",
      sla: "99.5% / поддержка 24/7",
      зарплата_цифрового_сотрудника_от: "60 000 ₽/мес",
      онбординг: "250 000 ₽ единоразово",
      cta: "Запустить пилот"
    }
  ];

  const cases: CaseCard[] = [
    {
      case_id: "telecom_support",
      компания_и_отрасль: "Телеком-оператор, 500+ сотрудников",
      период: "03.2024–08.2024",
      процесс_до: "Операторы обрабатывали все звонки вручную",
      процесс_после: "AI-оператор закрывает 70% типовых обращений",
      kpi: [
        { метрика: "время ответа", до: "25 мин", после: "2 мин" },
        { метрика: "трудозатраты", изменение: "-30%" },
        { метрика: "NPS", изменение: "+30%" }
      ],
      экономика: {
        экономия_в_мес: "≈250 000 ₽",
        окупаемость: "≤1 месяц"
      },
      роли: ["voice_contact_center"],
      как_сделали: [
        "Проанализировали 5000+ звонков за 3 месяца",
        "Обучили модель на типовых сценариях",
        "Настроили интеграцию с CRM и телефонией",
        "Запустили пилот на 20% трафика",
        "Масштабировали на весь call-центр"
      ],
      цитата: "Клиенты получают ответы мгновенно, а наши операторы занимаются сложными задачами. Окупилось за месяц."
    },
    {
      case_id: "manufacturing_crm",
      компания_и_отрасль: "Производственная компания, B2B сегмент",
      период: "01.2024–06.2024",
      процесс_до: "Менеджеры вручную обрабатывали отклики на рассылки",
      процесс_после: "AI-менеджер ведет первичные диалоги и заполняет CRM",
      kpi: [
        { метрика: "скорость обработки", изменение: "×5 быстрее" },
        { метрика: "конверсия в встречу", изменение: "+25%" },
        { метрика: "качество данных в CRM", изменение: "+40%" }
      ],
      экономика: {
        экономия_в_мес: "≈180 000 ₽",
        окупаемость: "≤2 месяца"
      },
      роли: ["crm_response_manager"],
      как_сделали: [
        "Изучили скрипты менеджеров",
        "Настроили интеграцию с WhatsApp и AmoCRM",
        "Обучили бота квалификации лидов",
        "Внедрили постепенно по отделам",
        "Настроили аналитику и отчеты"
      ],
      цитата: "Теперь ни одна заявка не теряется, а менеджеры работают только с горячими лидами."
    },
    {
      case_id: "construction_tenders",
      компания_и_отрасль: "Строительная компания, госзаказы",
      период: "02.2024–07.2024",
      процесс_до: "Юристы вручную искали и анализировали тендеры",
      процесс_после: "AI-специалист находит релевантные тендеры и готовит документы",
      kpi: [
        { метрика: "участий в тендерах", изменение: "×2 за месяц" },
        { метрика: "время подготовки", изменение: "-60%" },
        { метрика: "выигранных тендеров", изменение: "+35%" }
      ],
      экономика: {
        экономия_в_мес: "≈320 000 ₽",
        окупаемость: "≤1 месяц"
      },
      роли: ["tender_ai_specialist"],
      как_сделали: [
        "Подключили к основным тендерным площадкам",
        "Настроили фильтры по профилю компании",
        "Обучили проверке требований и документов",
        "Интегрировали с системой документооборота",
        "Запустили уведомления о новых тендерах"
      ],
      цитата: "Участвуем в два раза больше тендеров при тех же ресурсах. Прибыль выросла на 40%."
    }
  ];

  const calculateSavings = () => {
    const { tasksPerDay, minutesPerTask, hourCost, autoCloseRate } = calculatorData;
    const hoursPerMonth = (tasksPerDay * minutesPerTask * 22) / 60;
    const autoClosedHours = (hoursPerMonth * autoCloseRate) / 100;
    const monthlySavings = autoClosedHours * hourCost;
    
    return {
      hoursPerMonth: Math.round(autoClosedHours),
      monthlySavings: Math.round(monthlySavings),
      paybackMonths: Math.ceil(150000 / monthlySavings)
    };
  };

  const savings = calculateSavings();

  const faqItems = [
    {
      question: "Как быстро можно запустить цифрового сотрудника?",
      answer: "Стандартный пилот запускается за 30 дней. Включает анализ процессов, настройку интеграций, обучение модели и тестирование на ограниченном объеме задач."
    },
    {
      question: "Какие гарантии безопасности данных?",
      answer: "Соблюдаем требования ПДн, ведем полный журнал действий, поддерживаем режим 'человек-в-контуре'. Возможна установка on-premise на вашей инфраструктуре."
    },
    {
      question: "Можно ли интегрировать с нашими системами?",
      answer: "Да, поддерживаем интеграцию с 1С, CRM-системами, телефонией, мессенджерами, СЭД. Если нужной интеграции нет — разработаем под ваши требования."
    },
    {
      question: "Что включает техническая поддержка?",
      answer: "SLA 99.5%, мониторинг 24/7, обновления модели, консультации по оптимизации процессов. Поддержка через чат, email и телефон."
    },
    {
      question: "Как происходит оплата?",
      answer: "Подписная модель: единоразовый онбординг + ежемесячная 'зарплата' цифрового сотрудника. Первый месяц — бесплатный пилот с измерением KPI."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Zavod AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#roles" className="text-sm hover:text-blue-600 transition-colors">Роли</a>
            <a href="#cases" className="text-sm hover:text-blue-600 transition-colors">Кейсы</a>
            <a href="#platform" className="text-sm hover:text-blue-600 transition-colors">Платформа</a>
            <a href="#contact" className="text-sm hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Запустить пилот
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Цифровые сотрудники под подписку. 
            <span className="text-blue-600"> Снимаем рутину</span>, экономим бюджет, ускоряем ответ.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Старт за 30 дней. На 40% дешевле эквивалентного FTE. SLA и безопасность для предприятия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Запустить пилот
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="mr-2 h-4 w-4" />
              Смотреть демо 2 мин
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              С 2017 года
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              25+ готовых модулей
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Кейсы с измеримыми KPI
            </div>
          </div>
        </div>
      </section>

      {/* Roles Catalog */}
      <section id="roles" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Каталог цифровых сотрудников</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Готовые решения для автоматизации типовых процессов. Каждый сотрудник специализируется на конкретных задачах.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card key={role.role_id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {role.role_id === 'voice_contact_center' && <Phone className="h-5 w-5 text-blue-600" />}
                      {role.role_id === 'crm_response_manager' && <MessageSquare className="h-5 w-5 text-blue-600" />}
                      {role.role_id === 'tender_ai_specialist' && <FileText className="h-5 w-5 text-blue-600" />}
                      {role.role_id === 'email_parser' && <Mail className="h-5 w-5 text-blue-600" />}
                      {role.role_id === 'doc_ops_bot' && <Building className="h-5 w-5 text-blue-600" />}
                      {role.role_id === 'internal_llm_assistant' && <Bot className="h-5 w-5 text-blue-600" />}
                      <CardTitle className="text-lg">{role.название}</CardTitle>
                    </div>
                    <Badge variant="secondary">{role.sla.split('/')[0]}</Badge>
                  </div>
                  <CardDescription>{role.короткое_описание}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Основные задачи:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {role.основные_задачи.slice(0, 3).map((task, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">KPI на релиз:</h4>
                      <div className="flex flex-wrap gap-1">
                        {role.kpi_на_релиз.map((kpi, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {kpi.целевое}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Зарплата от</p>
                        <p className="font-bold text-blue-600">{role.зарплата_цифрового_сотрудника_от}</p>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        {role.cta}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Калькулятор выгоды</h2>
            <p className="text-muted-foreground">
              Рассчитайте экономию от внедрения цифрового сотрудника
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Параметры вашего процесса
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tasks">Задач в день</Label>
                    <Input
                      id="tasks"
                      type="number"
                      value={calculatorData.tasksPerDay}
                      onChange={(e) => setCalculatorData({...calculatorData, tasksPerDay: Number(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="minutes">Минут на задачу</Label>
                    <Input
                      id="minutes"
                      type="number"
                      value={calculatorData.minutesPerTask}
                      onChange={(e) => setCalculatorData({...calculatorData, minutesPerTask: Number(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cost">Стоимость часа сотрудника, ₽</Label>
                    <Input
                      id="cost"
                      type="number"
                      value={calculatorData.hourCost}
                      onChange={(e) => setCalculatorData({...calculatorData, hourCost: Number(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rate">Доля авто-закрытия, %</Label>
                    <Input
                      id="rate"
                      type="number"
                      value={calculatorData.autoCloseRate}
                      onChange={(e) => setCalculatorData({...calculatorData, autoCloseRate: Number(e.target.value)})}
                    />
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Результат расчета:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Экономия часов/мес:</span>
                      <span className="font-bold">{savings.hoursPerMonth} ч</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Экономия ₽/мес:</span>
                      <span className="font-bold text-green-600">{savings.monthlySavings.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Окупаемость пилота:</span>
                      <span className="font-bold">{savings.paybackMonths} мес</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Получить расчет на почту
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3л font-bold mb-4">Кейсы внедрения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты клиентов с измеримыми KPI и сроками окупаемости
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((case_item) => (
              <Card key={case_item.case_id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{case_item.период}</Badge>
                    <Badge className="bg-green-100 text-green-800">{case_item.экономика.окупаемость}</Badge>
                  </div>
                  <CardTitle className="text-lg">{case_item.компания_и_отрасль}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Результаты:</h4>
                      <div className="space-y-2">
                        {case_item.kpi.map((kpi, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{kpi.метрика}:</span>
                            <span className="font-medium text-green-600">
                              {kpi.изменение || `${kpi.до} → ${kpi.после}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Экономия в месяц:</span>
                        <span className="font-bold text-blue-600">{case_item.экономика.экономия_в_мес}</span>
                      </div>
                    </div>
                    <blockquote className="text-sm italic text-muted-foreground border-l-2 border-blue-600 pl-3">
                      "{case_item.цитата}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Безопасность и соответствие требованиям</h2>
            <p className="text-muted-foreground">
              Готовы работать с государственными и корпоративными заказчиками
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Защита данных</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Соблюдение ПДн
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Журнал всех действий
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Шифрование данных
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <User className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Человек в контуре</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Контроль решений
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Эскалация сложных случаев
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Аудит процессов
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>On-premise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Установка на вашей инфраструктуре
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Полный контроль данных
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Соответствие корп. политикам
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Платформа Zavod AI</h2>
            <p className="text-muted-foreground">
              Технологическая основа для создания и управления цифровыми сотрудниками
            </p>
          </div>
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="architecture">Архитектура</TabsTrigger>
              <TabsTrigger value="integrations">Интеграции</TabsTrigger>
              <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
            </TabsList>
            <TabsContent value="architecture" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Модульная архитектура</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Ядро платформы:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• LLM-движок с fine-tuning</li>
                        <li>• Система управления диалогами</li>
                        <li>• Модуль безопасности и аудита</li>
                        <li>• API для интеграций</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Готовые модули:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Обработка голоса и текста</li>
                        <li>• Работа с документами</li>
                        <li>• CRM и email интеграции</li>
                        <li>• Аналитика и отчеты</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="integrations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Готовые интеграции</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">CRM системы:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• AmoCRM</li>
                        <li>• Битрикс24</li>
                        <li>• Salesforce</li>
                        <li>• HubSpot</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Мессенджеры:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• WhatsApp Business</li>
                        <li>• Telegram</li>
                        <li>• Viber</li>
                        <li>• VK для бизнеса</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Корп. системы:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 1С различных конфигураций</li>
                        <li>• СЭД (Directum, ELMA)</li>
                        <li>• IP-телефония</li>
                        <li>• SharePoint</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monitoring" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Мониторинг и аналитика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Метрики качества:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Точность ответов</li>
                        <li>• Время обработки</li>
                        <li>• Доля авто-закрытия</li>
                        <li>• Удовлетворенность клиентов</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Операционные метрики:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Uptime и доступность</li>
                        <li>• Нагрузка на систему</li>
                        <li>• Ошибки и исключения</li>
                        <li>• Производительность</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
          <Accordion>
            {[...faqItems].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Запустить пилот</h2>
            <p className="text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение рабочего дня
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Заявка на пилотный проект</CardTitle>
              <CardDescription>
                Первый месяц — бесплатно. Измеряем KPI и показываем результат.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Рабочая почта *</Label>
                  <Input id="email" type="email" placeholder="email@company.ru" required />
                </div>
                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название компании" />
                </div>
                <div>
                  <Label htmlFor="role">Интересующая роль</Label>
                  <select className="w-full p-2 border border-border rounded-md bg-background">
                    <option value="">Выберите роль</option>
                    {roles.map((role) => (
                      <option key={role.role_id} value={role.role_id}>
                        {role.название}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="gov" className="rounded" />
                  <Label htmlFor="gov" className="text-sm">
                    Государственная организация (требуется особый комплаенс)
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-6 w-6 text-blue-600" />
                <span className="font-bold">Zavod AI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Снимаем рутину с живых сотрудников, помогая ключевым компаниям России быстро расти.
              </p>
              <p className="text-xs text-muted-foreground">
                © 2024 Zavod AI. Все права защищены.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#roles" className="hover:text-foreground">Каталог ролей</a></li>
                <li><a href="#cases" className="hover:text-foreground">Кейсы</a></li>
                <li><a href="#platform" className="hover:text-foreground">Платформа</a></li>
                <li><a href="#" className="hover:text-foreground">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">О нас</a></li>
                <li><a href="#" className="hover:text-foreground">Команда</a></li>
                <li><a href="#" className="hover:text-foreground">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Документация</a></li>
                <li><a href="#" className="hover:text-foreground">API</a></li>
                <li><a href="#contact" className="hover:text-foreground">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground">Статус системы</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZavodAIWebsite;
