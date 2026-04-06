import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PageBanner } from '../components/layout/PageBanner';
import { Newsletter } from '../components/sections/Newsletter';
import { useHayc } from '../hayc/config-context';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { User, Phone, Users, Clock, CalendarIcon, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

export function ReservationPage() {
  const { t, config, cp } = useHayc();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const btc = config.bookTableConfig;

  return (
    <>
      <Header variant="inner" />
      <main>
        <PageBanner title={config.navigationConfig.reservation} titlePath="navigationConfig.reservation" />

        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 {...cp('bookTableConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
                {t(config.bookTableConfig.sectionTitle)}
              </h3>
              <h2 {...cp('bookTableConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
                {t(config.bookTableConfig.title)}
              </h2>
            </div>

            <form className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e] z-10" />
                  <Input
                    type="text"
                    placeholder={t(btc.namePlaceholder)}
                    {...cp('bookTableConfig.namePlaceholder')}
                    className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e] z-10" />
                  <Input
                    type="tel"
                    placeholder={t(btc.phonePlaceholder)}
                    {...cp('bookTableConfig.phonePlaceholder')}
                    className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-14 pl-12 justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                      >
                        <CalendarIcon className="absolute left-4 w-5 h-5 text-[#c8a97e]" />
                        {date ? format(date, 'PPP') : <span className="text-white/50" {...cp('bookTableConfig.datePlaceholder')}>{t(btc.datePlaceholder)}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-[#1a1a1a] border-white/20">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="bg-[#1a1a1a] text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e] z-10" />
                  <Select>
                    <SelectTrigger className="h-14 pl-12 bg-white/10 border-white/20 text-white" {...cp('bookTableConfig.timePlaceholder')}>
                      <SelectValue placeholder={t(btc.timePlaceholder)} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-white/20">
                      {btc.reservationTimeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-white hover:bg-white/10">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e] z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <Select>
                    <SelectTrigger className="h-14 pl-12 bg-white/10 border-white/20 text-white" {...cp('bookTableConfig.tablePlaceholder')}>
                      <SelectValue placeholder={t(btc.tablePlaceholder)} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-white/20">
                      {btc.reservationTableOptions.map((table, ti) => (
                        <SelectItem key={ti} value={`table-${ti}`} className="text-white hover:bg-white/10">
                          {t(table)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c8a97e] z-10" />
                  <Select>
                    <SelectTrigger className="h-14 pl-12 bg-white/10 border-white/20 text-white" {...cp('bookTableConfig.guestsPlaceholder')}>
                      <SelectValue placeholder={t(btc.guestsPlaceholder)} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-white/20">
                      {btc.reservationGuestOptions.map((num) => (
                        <SelectItem key={num} value={num} className="text-white hover:bg-white/10">
                          {num} {num === '1' ? t(btc.guestSingular) : t(btc.guestsPlural)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#c8a97e] z-10" />
                  <Textarea
                    placeholder={t(btc.messagePlaceholder)}
                    {...cp('bookTableConfig.messagePlaceholder')}
                    className="pl-12 min-h-32 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#c8a97e] hover:bg-[#b89a6f] text-white px-12 h-14"
                >
                  <span {...cp('commonConfig.submit')}>{t(config.commonConfig.submit)}</span>
                </Button>
              </div>
            </form>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
