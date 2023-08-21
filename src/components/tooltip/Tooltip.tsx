import {
  Arrow,
  Content,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";

import styles from "./tooltip.module.scss";

interface ITooltipProps extends React.PropsWithChildren {
  className?: string;
  content: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({ children, content }) => {
  return (
      <Root>
        <Trigger>{children}</Trigger>
        <Portal>
          <Content className={styles.content} sideOffset={5} align={"start"}>
            {content}
            <Arrow className={styles.arrow} />
          </Content>
        </Portal>
      </Root>
  );
};
