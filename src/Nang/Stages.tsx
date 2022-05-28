import { StageContainer, StageNumber } from './styles';

export const Stages = ({
  isStageOne,
  setIsStageOne,
}: {
  readonly isStageOne: boolean;
  readonly setIsStageOne: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onStageOneClick = () => {
    setIsStageOne(true);
  };

  const onStageTwoClick = () => {
    setIsStageOne(false);
  };
  return (
    <StageContainer>
      <StageNumber onClick={onStageOneClick} selected={isStageOne}>
        1
      </StageNumber>
      <StageNumber onClick={onStageTwoClick} selected={!isStageOne}>
        2
      </StageNumber>
    </StageContainer>
  );
};
