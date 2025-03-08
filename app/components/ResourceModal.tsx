import ResourceType from "../entities/ResourceType";

interface Props {
  modalType: string | null;
  selectedEntity: ResourceType | null;
  closeModel: () => void;
}

const ResourceModal = ({ modalType, selectedEntity, closeModel }: Props) => {
  return (
    <>
      {/* Create modal */}
      {modalType === "add" && (
        <div className="modal">
          <CreateModel closeModel={closeModel} />
        </div>
      )}

      {/* Update modal */}
      {modalType === "update" && (
        <div className="modal">
          <UpdateResourcesType
            closeModel={closeModel}
            entity={selectedEntity!}
          />
        </div>
      )}

      {/* Read modal */}
      {modalType === "read" && (
        <div className="modal">
          <ReadModel closeModel={closeModel} entity={selectedEntity!} />
        </div>
      )}

      {/* Delete modal */}
      {modalType === "delete" && (
        <div className="modal">
          <DeleteModel closeModel={closeModel} entity={selectedEntity!} />
        </div>
      )}
    </>
  );
};

export default ResourceModal;
