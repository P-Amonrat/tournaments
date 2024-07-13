import { Link, useMatches } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Space, Typography } from "antd";
import { LuLock } from "react-icons/lu";
const { Text } = Typography;

interface AlbumIndexEntryProps {
  album: any;
  uuid: string;
}

export function AlbumIndexEntry(props: AlbumIndexEntryProps) {
  const { t } = useTranslation();
  const { album, uuid } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;

  return (
    <Link to={`/users/${uuid}/my-album/${album.id}`}>
      <Space direction="vertical" size={10} style={{ display: "flex" }}>
        <div
          style={{
            width: "100%",
            paddingBottom: "60%",
            borderRadius: 12,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              album && album.cover && album.cover !== "-"
                ? `url("${cdnUrl}/${album.cover}")`
                : undefined,
          }}
        />
        <Space direction="vertical" size={0} style={{ display: "flex" }}>
          <Space size={8}>
            {album.isPrivate && <LuLock style={{ fontSize: "1em" }} />}
            <Text>{album.name}</Text>
          </Space>
          {album.totalPhotos && album.totalPhotos !== "0" && (
            <Text>{`${album.totalPhotos} ${t("images")}`}</Text>
          )}
        </Space>
      </Space>
    </Link>
  );
}
