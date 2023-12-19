"use client"

import {MessageSquare} from "lucide-react";
import { Heading } from "@/components/ui/heading"; 
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Form validation schema
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const Conversation = () => {
  const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
          username: "",
      },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values) => {
      console.log(values);
      // Handle form submission
  };

  return (
      <div className="flex-col ml-10 mr-10 mb-3 h-full w-full">
          <Heading
              title="Conversation"
              description="Ask Taskmaster anything."
              icon={MessageSquare}
              iconColor="text-violet-500"
              bgColor="bg-violet-500/10"
          />
          <div className="flex ml-8 mt-8 h-full">
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="relative w-full mr-20 space-y-8 p">
                      <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                              <FormItem className="flex-row">
                                  <FormControl>
                                      <div className="relative z-0 flex-row w-full">
                                          <Input placeholder="Why is Siddhant Paliwal so great?" {...field} />
                                      </div>
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                          )}
                      />
                  </form>
              </Form>
              <div className="flex justify-end right-0 absolute z-10 mr-20 mt-3">
                  <Button type="submit" disabled={isLoading}>Submit</Button>
              </div>
          </div>
          <div className="mt-5 ml-8 space-y-4">
              <p> Messages here </p>
          </div>
      </div>
  );
}

export default Conversation;