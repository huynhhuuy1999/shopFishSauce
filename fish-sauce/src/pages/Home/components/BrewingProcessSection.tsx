import { BREWING_STEPS } from "../constants";

export default function BrewingProcessSection() {
  return (
    <section className="md:hidden py-xl bg-surface-container-low px-margin-mobile">
      <div className="bg-white rounded-xl p-8 border border-outline-variant relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full" />
        <h3 className="font-headline text-headline-lg-mobile text-primary mb-6">
          Quy Trình Ủ Chượp 12 - 18 Tháng
        </h3>
        <div className="space-y-8 relative">
          {BREWING_STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-headline text-headline-md text-on-surface">
                  {step.title}
                </h4>
                <p className="text-body-md text-on-surface-variant mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 p-4 bg-primary/10 rounded-lg border-l-4 border-primary italic text-primary text-body-md">
          &quot;Thời gian là gia vị quý giá nhất tạo nên độ đạm tự nhiên và
          hương thơm nồng nàn.&quot;
        </blockquote>
      </div>
    </section>
  );
}
