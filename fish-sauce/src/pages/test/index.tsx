import { useState } from "react";
import { createTypeSauce } from "@/services/typeSauce.service";

export const Test = () => {
  const [image, setImage] = useState<File | null>(null);

  const addTypeSauce = async () => {
    const formData = new FormData();

    formData.append("nameType", "Nước mắm Phú Quốc");
    formData.append("price", "120000");
    formData.append("quantityPerBox", "12");
    formData.append("capacity", "500");
    formData.append("typeBottleID", "1");
    formData.append("status", "1");
    formData.append("description", "Nước mắm truyền thống");

    if (image) {
      console.log("image", image);
      formData.append("image", image);
    }

    await createTypeSauce(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setImage(e.target.files[0]);
            console.log("selected file:", e.target.files[0]);
          }
        }}
      />
      <button onClick={addTypeSauce}>click</button>
      <h1>Test Page</h1>
    </div>
  );
};
