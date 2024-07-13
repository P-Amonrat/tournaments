import { Avatar, Image, Skeleton, Space, Tag, Tooltip, Typography } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useMatches, useNavigate } from "@remix-run/react";
import { Media } from "~/components/common";
import { useEffect, useState } from "react";
const { Text } = Typography;

interface WebboardEntryAuthorProps {
  anonymous?: boolean;
  userUuid?: string;
  deletedAt?: string;
  displayImage?: string;
  assetFrame?: string;
  displayName: string;
  isAdmin?: boolean;
  createdAt?: string;
  updatedAt?: string;
  isVerified: string;
  role: any[];
}

export function WebboardEntryAuthor(props: WebboardEntryAuthorProps) {
  const {
    anonymous,
    deletedAt,
    displayImage,
    displayName,
    isAdmin,
    createdAt,
    updatedAt,
    userUuid,
    isVerified,
    role,
    assetFrame,
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [diff, setDiff] = useState<any>(null);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  let roles = [];
  if (role) {
    roles = role.sort((a: any, b: any) => a.id - b.id);
  }

  const getProperTimeDifference = (date: any) => {
    if (!date) return null;

    const diffMonths = dayjs().diff(dayjs(date), "month");
    if (diffMonths >= 12) {
      return { unit: "year", value: dayjs().diff(dayjs(date), "year") };
    } else if (diffMonths >= 1) {
      return { unit: "month", value: diffMonths };
    } else {
      const diffDays = dayjs().diff(dayjs(date), "day");
      if (diffDays >= 1) {
        return { unit: "day", value: diffDays };
      } else {
        const diffHours = dayjs().diff(dayjs(date), "hour");
        if (diffHours >= 1) {
          return { unit: "hour", value: diffHours };
        } else {
          const diffMinutes = dayjs().diff(dayjs(date), "minute");
          if (diffMinutes >= 1) {
            return { unit: "minute", value: diffMinutes };
          } else {
            const diffSeconds = dayjs().diff(dayjs(date), "second");
            return { unit: "second", value: diffSeconds };
          }
        }
      }
    }
  };

  const linkToUser = (e: any) => {
    navigate(`/users/${userUuid}`);
  };

  useEffect(() => {
    if (createdAt) {
      setDiff(getProperTimeDifference(createdAt));
    }
  }, [createdAt]);

  return (
    <Space size={12}>
      <div
        style={{
          padding: "14.5px",
          backgroundImage: `url(${assetFrame})`,
          // backgroundImage: `url(/image/Space.gif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Avatar
          src={
            displayImage && !anonymous
              ? displayImage
              : "/image/avatar-anonymous.jpg"
          }
          size={50}
          onClick={userUuid && !anonymous ? linkToUser : undefined}
          style={{ cursor: userUuid && !anonymous ? "pointer" : "default" }}
        />
      </div>
      <Space direction="vertical" size={0}>
        <Space size={10}>
          <Text
            style={{
              fontWeight: 600,
              cursor: userUuid && !anonymous ? "pointer" : "default",
            }}
            onClick={userUuid && !anonymous ? linkToUser : undefined}
          >
            {anonymous ? t("anonymous") : displayName}
          </Text>
          {isAdmin && !anonymous && (
            <Tag
              style={{ margin: 0, lineHeight: "24px", fontSize: 12 }}
              color="#7063f4"
            >
              {t("admin")}
            </Tag>
          )}
          {!anonymous && (
            <>
              {isVerified && roles && roles.length < 1 && (
                <Tooltip placement="top" arrow={false} title={t("verified")}>
                  <div>
                    <Image
                      width={25}
                      src="/image/verifiedUser.png"
                      preview={false}
                    />
                  </div>
                </Tooltip>
              )}
              {roles && roles.length > 0 && (
                <Tooltip placement="top" arrow={false} title={t(roles[0].name)}>
                  <div>
                    <Image
                      width={25}
                      src={`${cdnUrl}/${roles[0].badgeImage}`}
                      preview={false}
                    />
                  </div>
                </Tooltip>
              )}
            </>
          )}
        </Space>
        {diff && (
          <Space wrap={true}>
            {diff ? (
              <Text>{`${diff.value} ${t(`${diff.unit}s ago`)}`}</Text>
            ) : (
              <Skeleton
                paragraph={{ width: 50, rows: 1, style: { margin: 0 } }}
                title={false}
                active
              />
            )}
            {updatedAt && createdAt && updatedAt !== createdAt && (
              <Media greaterThan="sm">
                <Space>
                  <span>&#183;</span>
                  <Text style={{ opacity: 0.6 }}>{`${t(
                    deletedAt ? "deleted at" : "edited at"
                  )} ${dayjs(deletedAt ? deletedAt : updatedAt).format(
                    "DD/MM/YYYY - HH:mm"
                  )}`}</Text>
                </Space>
              </Media>
            )}
          </Space>
        )}
      </Space>
    </Space>
  );
}
