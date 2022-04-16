import { Container, Group, Image, Select, Text, Textarea, Button } from "@mantine/core"
import { useForm } from "@mantine/hooks"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./review"
import api, { is_logged_in } from "../services/api";

export function Reviews() {
  const { pk } = useParams()
  const [ reviews, setReviews ] = useState({})
  const [filter, setFilter] = useState('')

  const form = useForm({ initialValues: { review: '' } });

  useEffect(() => {
    api.get(`/products/${pk}`).then(res => {
      setReviews(res.data)
    })
  },[pk])

  return (
    <Container>
      <Group grow>
        <Group direction="column" grow>
          <Image src={reviews.image} width='300px' fit="contain" radius='md'  alt={reviews.title} />
          <Text fontSize="lg" fontWeight="bold" mb="sm">{reviews.title}</Text>
          <Text size="sm">
            {reviews?.description}
          </Text>
        </Group>
        <Group>
          <Select value={filter}
            onChange={(value) => setFilter(value)}
            data={[
              { value: '', label: 'All' },
              { value: 'positive', label: 'View positive reviews' },
              { value: 'negative', label: 'View negative reviews' }
            ]}
          />
          <Group>
            {reviews?.comments
              ?.filter(a => filter==='' || a.sentiment?.includes(filter))
              ?.map((review,id) => <Review key={id} user={review.user__username} comment={review.text} date={review.date_posted} />
            )}
          </Group>
          {is_logged_in() && 
          <Group>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Textarea
                placeholder="Write your review here"
                label="Add your review"
                {...form.getInputProps('review')}
              />

              <Group position="left" mt="md">
                <Button variant="light" color="blue" style={{ marginTop: 14, width: '150px' }}>
                  Add Review
                </Button>
              </Group>
            </form>
          </Group>
          }
          <Group>
            {/* Filter Reviews function */}
            <Button variant="light" color="blue" style={{ marginTop: 14, width: '150px' }}>
              Filter Reviews
            </Button>
          </Group>
        </Group>
      </Group>
    </Container>
  )
}
