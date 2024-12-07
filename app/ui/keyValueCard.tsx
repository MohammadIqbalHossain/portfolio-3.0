interface metadataProps {
  dataName: string;
  metaInfo: string;
}

interface projectMetadataProps {
  projectMetadata: metadataProps[];
}

export default function KeyValueCard({
  projectMetadata,
}: projectMetadataProps) {
  return (
    <div className="flex flex-col gap-y-4 ">
      {projectMetadata.map((element, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 text-left text-[--avt-text-secondary] md:flex-row lg:flex-row"
        >
          <div className="shrink-0 capitalize lg:w-[150px]">
            {element.dataName}:{" "}
          </div>
          <div>
            <span className=" text-white">{element.metaInfo}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
