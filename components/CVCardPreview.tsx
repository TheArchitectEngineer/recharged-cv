import { MinimalSharedCVPreview } from "./MinimalSharedCVPreview"

export const CVCardPreview = ({ cv }: any) => {
  return (
    <div className="relative mx-auto aspect-[9/16] origin-[left_top] scale-[0.75] overflow-hidden [&>*]:pointer-events-none [&>*]:select-none">
      <MinimalSharedCVPreview cv={cv} />
    </div>
  )
}
