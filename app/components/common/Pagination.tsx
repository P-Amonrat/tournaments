import { Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { TiltButton } from "./TiltButton";
import { toNumber } from "lodash";
import { Media } from "./Media";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageClicked: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { currentPage, onPageClicked, totalPages } = props;
  let pages = ["1", `${totalPages}`];

  const start = Math.max(currentPage - 2, 2);
  const end = Math.min(currentPage + 2, totalPages - 1);
  const surroundingPages = [];
  for (let i = start; i <= end; i++) {
    surroundingPages.push(`${i}`);
  }
  if (start > 2) {
    surroundingPages.unshift("...");
  }
  if (end < totalPages - 1) {
    surroundingPages.push("...");
  }
  pages.splice(1, 0, ...surroundingPages);

  if (totalPages > 1) {
    return (
      <Space size={10} style={{ marginTop: 30 }}>
        {currentPage > 1 && (
          <Media greaterThan="sm">
            <TiltButton
              color="secondary"
              onClick={() => onPageClicked(toNumber(currentPage - 1))}
            >
              <LeftOutlined />
            </TiltButton>
          </Media>
        )}
        {pages.map((page: string) => (
          <TiltButton
            key={page}
            color={page === `${currentPage}` ? "primary" : "secondary"}
            onClick={
              page !== `${currentPage}` && page !== "..."
                ? () => onPageClicked(toNumber(page))
                : undefined
            }
          >
            {page}
          </TiltButton>
        ))}
        {currentPage < totalPages && (
          <Media greaterThan="sm">
            <TiltButton
              color="secondary"
              onClick={() => onPageClicked(toNumber(currentPage + 1))}
            >
              <RightOutlined />
            </TiltButton>
          </Media>
        )}
      </Space>
    );
  }
}
