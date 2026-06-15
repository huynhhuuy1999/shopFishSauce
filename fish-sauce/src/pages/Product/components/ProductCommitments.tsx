import MaterialIcon from "@/components/MaterialIcon";
import { PRODUCT_COMMITMENTS } from "../constants";

export default function ProductCommitments() {
  return (
    <div className="space-y-lg">
      <h2 className="font-headline text-headline-lg text-primary">
        Gửi gắm niềm tin vào sự nguyên bản
      </h2>
      <div className="space-y-md">
        {PRODUCT_COMMITMENTS.map((item) => (
          <div key={item.title} className="flex items-start gap-md">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center shrink-0">
              <MaterialIcon
                name={item.icon}
                fill
                className="text-on-primary-container"
              />
            </div>
            <div>
              <h4 className="font-headline text-headline-md text-on-surface">
                {item.title}
              </h4>
              <p className="text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
