require(readr)
require(ggplot2)
require(dplyr)

df = read_csv("/home/bweigel/Projects/bweigel.github.io/resources/examplesimulation-1529265922407/simulation.csv") %>% 
  filter(status == "END") %>%
  mutate(duration=duration/1000, 
         simulation_name=gsub(" Categorization Coldstart-scenario", "", simulation_name) %>% toupper())

df$simulation_name <- factor(df$simulation_name, levels = c("ZIP", "FAT", "SLIM"), labels = c("ZIP-IN-ZIP\n- extract libs @RT -\n[59 MB]", "FAT ZIP\n\n[59 MB]", "SLIM ZIP\n\n[39 MB]"))

mean_duration = aggregate(duration~simulation_name, data=df, mean)

ggplot(df , aes(x=duration)) +
  xlab("cold-start time (s)") +
  geom_histogram(binwidth = 0.5, fill="grey60") +
  facet_grid(simulation_name~.) +
  geom_vline(aes(xintercept=duration), mean_duration) +
  geom_text(aes(x=duration, label=round(duration, 1), y=1), mean_duration, 
            angle=0, check_overlap = TRUE, 
            vjust = "inward", hjust = "right", 
            nudge_y = 50, nudge_x = -0.05) +
  theme_bw(24) + 
  theme(axis.title.y=element_blank(),
        axis.line.y = element_blank(),
        axis.ticks.y = element_blank(),
        axis.text.y = element_blank(),
        panel.grid = element_blank(),
        panel.border = element_blank(),
        strip.background =  element_rect(fill="grey90", size = 0))

