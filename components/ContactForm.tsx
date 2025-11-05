"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	name: z.string().min(1),
	email: z.string(),
	descricao: z.string().optional(),
	termos: z.boolean(),
});

export default function ContactForm() {
	const [sending, setSending] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit() {}

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center p-8">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="relative w-full h-full space-y-6 md:space-y-8 outline-1 p-6 md:p-10 outline-neutral-200 shadow-sm bg-neutral-50 rounded-md mt-10"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name*</FormLabel>
								<FormControl>
									<Input
										placeholder="name"
										type=""
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Your full name
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email*</FormLabel>
								<FormControl>
									<Input
										placeholder="Email"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Email para contato
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="descricao"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Descrição</FormLabel>
								<FormControl>
									<Textarea
										id="descricao"
										placeholder="Descrição"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Adicione descrições ou comentarios
									adicionais sobre seu projeto
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="termos"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										<p>
											Eu concordo com o processamento dos
											meus dados pessoais de acordo com a{" "}
											<Link
												href={"/legal"}
												className={
													"font-bold hover:text-blue-500 underline"
												}
											>
												Política de Privacidade
											</Link>
										</p>
									</FormLabel>

									<FormMessage />
								</div>
							</FormItem>
						)}
					/>
					<div className="relative w-full flex justify-center">
						<Button
							type="submit"
							disabled={sending}
							className="rounded-none hover:cursor-pointer"
						>
							enviar
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
