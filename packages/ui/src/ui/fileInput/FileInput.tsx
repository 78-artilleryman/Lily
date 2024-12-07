import clsx from "clsx";
import { ChangeEvent, forwardRef, Ref, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineChangeCircle } from "react-icons/md";
import { fileInputHoverIconStyle, fileInputStyle, imageStyle, selctFileInputStyle } from "./style.css.js";
import { FileInputProps } from "./types.js";

const FileInput = (props: FileInputProps, ref: Ref<HTMLInputElement>) => {
  const { className, size, upload } = props;

  const [preview, setPreview] = useState<string>("");

  const handleFileInputonChange = (file: ChangeEvent<HTMLInputElement>) => {
    const fileData = file.target.files?.[0];
    if (fileData && fileData.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string); // 이미지 데이터 URL 설정
      };
      reader.readAsDataURL(fileData); // 파일 읽기
      upload(); // 파일 저장소 업로드
    }
  };

  return (
    <label
      htmlFor="file-input"
      className={clsx([fileInputStyle({ size }), { [selctFileInputStyle]: preview }, className])}>
      {preview ? (
        <>
          <img src={preview} alt="Preview" className={clsx(imageStyle)} />
          <MdOutlineChangeCircle className={clsx(fileInputHoverIconStyle)} color="white" />
        </>
      ) : (
        <FaPlus className="svg" />
      )}
      <input
        id="file-input"
        ref={ref}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileInputonChange}
      />
    </label>
  );
};

const _FileInput = forwardRef(FileInput);
export { _FileInput as FileInput };
