import React from 'react'
import { A, LineClamp, Small } from '~/components/Typography'
import { Episode } from '~/graphql/types.generated'
import { format } from 'timeago.js'
import Flex from '~/components/Flex'

interface Props {
  episodes: Episode[]
}

export default function PodcastEpisodesList({ episodes }: Props) {
  return (
    <Flex flexDirection="column" gap={16}>
      {episodes.map((ep) => (
        <Flex flexDirection="column" gap={4} key={ep.id}>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href={`https://designdetails.fm/episodes/${
              ep.legacy_id || ep.token
            }`}
          >
            {ep.title}
          </A>
          <LineClamp lines={2}>{ep.description}</LineClamp>
          <Small>Released {format(ep.published_at)}</Small>
        </Flex>
      ))}
    </Flex>
  )
}
