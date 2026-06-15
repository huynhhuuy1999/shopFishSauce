import MaterialIcon from "@/components/MaterialIcon";
import { MOBILE_COMMITMENTS } from "../constants";

export default function CommitmentsSection() {
  return (
    <section className="md:hidden py-xl px-margin-mobile bg-white">
      <div className="text-center mb-lg">
        <h3 className="font-headline text-headline-lg-mobile text-on-surface">
          Cam Kết Chất Lượng
        </h3>
        <p className="text-on-surface-variant mt-2">
          Chúng tôi đặt sức khỏe người tiêu dùng lên hàng đầu.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {MOBILE_COMMITMENTS.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-surface border border-outline-variant rounded-xl flex flex-col items-center text-center"
          >
            <MaterialIcon
              name={item.icon}
              fill
              className="text-primary text-4xl mb-4"
            />
            <h4 className="font-headline text-headline-md text-on-surface mb-2">
              {item.title}
            </h4>
            <p className="text-body-md text-on-surface-variant">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
